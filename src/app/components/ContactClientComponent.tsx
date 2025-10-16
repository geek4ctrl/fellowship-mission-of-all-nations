'use client'

import { useState } from "react"

export default function ContactClientComponent() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'firstName':
                if (!value.trim()) return 'First name is required'
                if (value.trim().length < 2) return 'First name must be at least 2 characters'
                return ''
            case 'lastName':
                if (!value.trim()) return 'Last name is required'
                if (value.trim().length < 2) return 'Last name must be at least 2 characters'
                return ''
            case 'email':
                if (!value.trim()) return 'Email is required'
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(value)) return 'Please enter a valid email address'
                return ''
            case 'phone':
                if (!value.trim()) return 'Phone number is required'
                const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
                if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number'
                return ''
            case 'message':
                if (!value.trim()) return 'Message is required'
                if (value.trim().length < 10) return 'Message must be at least 10 characters'
                return ''
            default:
                return ''
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        // Validate on change if field has been touched
        if (touched[name]) {
            const error = validateField(name, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTouched(prev => ({ ...prev, [name]: true }))
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Validate all fields
        const newErrors: Record<string, string> = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData])
            if (error) newErrors[key] = error
        })

        setErrors(newErrors)
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            message: true
        })

        // If no errors, submit form
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true)
            
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false)
                setSubmitSuccess(true)
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setTouched({})
                
                // Hide success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000)
            }, 1500)
        }
    }

    return (
    <main className="relative py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden" id="contact">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-25 animate-float"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2.5s'}}></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 text-gray-600 dark:text-gray-300 md:px-8">
            <div className="max-w-lg mx-auto space-y-4 text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg mb-2">✉️ Get In Touch</div>
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-800 dark:from-pink-200 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">Contact Us</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-normal">We'd love to hear from you! Please fill out the form below.</p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto">
                {/* Success Message */}
                {submitSuccess && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500 dark:border-green-400 rounded-2xl animate-fade-in">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-bold text-green-800 dark:text-green-300">Message sent successfully!</p>
                                <p className="text-sm text-green-700 dark:text-green-400">We'll get back to you soon.</p>
                            </div>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-white/50 dark:border-gray-800/50 p-8 sm:p-10 hover:shadow-3xl transition-all duration-500">
                    {/* First and Last Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                First name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                id="firstName" 
                                name="firstName" 
                                type="text" 
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                    errors.firstName && touched.firstName 
                                        ? 'border-red-500 dark:border-red-400' 
                                        : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                                } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30`} 
                            />
                            {errors.firstName && touched.firstName && (
                                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.firstName}
                                </p>
                            )}
                        </div>
                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                Last name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                id="lastName" 
                                name="lastName" 
                                type="text" 
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                    errors.lastName && touched.lastName 
                                        ? 'border-red-500 dark:border-red-400' 
                                        : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                                } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30`} 
                            />
                            {errors.lastName && touched.lastName && (
                                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                errors.email && touched.email 
                                    ? 'border-red-500 dark:border-red-400' 
                                    : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                            } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30`} 
                        />
                        {errors.email && touched.email && (
                            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.email}
                            </p>
                        )}
                    </div>
                    
                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                            Phone number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-3">
                            <select className="px-4 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold shadow-lg transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-500 outline-none">
                                <option>SA</option>
                                <option>US</option>
                                <option>UK</option>
                            </select>
                            <div className="flex-1">
                                <input 
                                    id="phone" 
                                    name="phone" 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="+27 (786) 593-260" 
                                    className={`w-full px-5 py-3.5 rounded-xl border-2 ${
                                        errors.phone && touched.phone 
                                            ? 'border-red-500 dark:border-red-400' 
                                            : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                                    } bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg text-gray-700 dark:text-gray-200 outline-none shadow-lg transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30`} 
                                />
                            </div>
                        </div>
                        {errors.phone && touched.phone && (
                            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.phone}
                            </p>
                        )}
                    </div>
                    
                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tell us what's on your mind..."
                            className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                errors.message && touched.message 
                                    ? 'border-red-500 dark:border-red-400' 
                                    : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                            } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30 resize-none`} 
                            rows={5}
                        ></textarea>
                        {errors.message && touched.message && (
                            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.message}
                            </p>
                        )}
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 font-bold text-white text-base bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 rounded-xl shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
    </main>
    )
}

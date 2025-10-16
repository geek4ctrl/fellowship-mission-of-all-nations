"use client"

import { useState } from "react"

export default function PrayerRequestForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requestType: 'personal',
        prayer: '',
        isUrgent: false,
        isAnonymous: false
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const validateField = (name: string, value: string | boolean) => {
        switch (name) {
            case 'name':
                if (!formData.isAnonymous && !value) return 'Name is required'
                if (!formData.isAnonymous && typeof value === 'string' && value.trim().length < 2) return 'Name must be at least 2 characters'
                return ''
            case 'email':
                if (!value) return 'Email is required'
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (typeof value === 'string' && !emailRegex.test(value)) return 'Please enter a valid email address'
                return ''
            case 'prayer':
                if (!value) return 'Prayer request is required'
                if (typeof value === 'string' && value.trim().length < 10) return 'Please provide more details (at least 10 characters)'
                return ''
            default:
                return ''
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        
        setFormData(prev => ({ ...prev, [name]: fieldValue }))
        
        if (touched[name]) {
            const error = validateField(name, fieldValue)
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
        
        const newErrors: Record<string, string> = {}
        if (!formData.isAnonymous) {
            const nameError = validateField('name', formData.name)
            if (nameError) newErrors.name = nameError
        }
        const emailError = validateField('email', formData.email)
        if (emailError) newErrors.email = emailError
        const prayerError = validateField('prayer', formData.prayer)
        if (prayerError) newErrors.prayer = prayerError

        setErrors(newErrors)
        setTouched({
            name: true,
            email: true,
            prayer: true
        })

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true)
            
            setTimeout(() => {
                setIsSubmitting(false)
                setSubmitSuccess(true)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    requestType: 'personal',
                    prayer: '',
                    isUrgent: false,
                    isAnonymous: false
                })
                setTouched({})
                
                setTimeout(() => {
                    setSubmitSuccess(false)
                    setIsOpen(false)
                }, 3000)
            }, 1500)
        }
    }

    return (
        <>
            {/* Floating Prayer Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-8 z-40 group"
                aria-label="Submit prayer request"
            >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse"></div>
                
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-2 border-white/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                    
                    <svg className="w-8 h-8 text-white relative z-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">Pray</span>
            </button>

            {/* Prayer Request Modal */}
            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in" 
                        onClick={() => setIsOpen(false)}
                    ></div>
                    
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
                        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white p-6 rounded-t-3xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <div>
                                            <h2 className="text-2xl font-bold">Prayer Request</h2>
                                            <p className="text-sm text-white/80">We're here to pray with you</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="mx-6 mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500 dark:border-green-400 rounded-2xl animate-fade-in">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-bold text-green-800 dark:text-green-300">Prayer request submitted!</p>
                                            <p className="text-sm text-green-700 dark:text-green-400">Our prayer team will lift you up in prayer.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Anonymous Checkbox */}
                                <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                                    <input
                                        type="checkbox"
                                        id="isAnonymous"
                                        name="isAnonymous"
                                        checked={formData.isAnonymous}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="isAnonymous" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        Submit anonymously
                                    </label>
                                </div>

                                {/* Name and Email Row */}
                                {!formData.isAnonymous && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                id="name" 
                                                name="name" 
                                                type="text" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                                    errors.name && touched.name 
                                                        ? 'border-red-500 dark:border-red-400' 
                                                        : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                                                } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30`} 
                                            />
                                            {errors.name && touched.name && (
                                                <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

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
                                    </div>
                                )}

                                {/* Phone and Request Type Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                            Phone (Optional)
                                        </label>
                                        <input 
                                            id="phone" 
                                            name="phone" 
                                            type="tel" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+27 (786) 593-260"
                                            className="w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30" 
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="requestType" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                            Request Type
                                        </label>
                                        <select
                                            id="requestType"
                                            name="requestType"
                                            value={formData.requestType}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30"
                                        >
                                            <option value="personal">Personal</option>
                                            <option value="family">Family</option>
                                            <option value="health">Health</option>
                                            <option value="financial">Financial</option>
                                            <option value="spiritual">Spiritual</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Prayer Request */}
                                <div>
                                    <label htmlFor="prayer" className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                                        Prayer Request <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        id="prayer" 
                                        name="prayer" 
                                        value={formData.prayer}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Share your prayer request with us..."
                                        className={`w-full px-5 py-3.5 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg outline-none border-2 ${
                                            errors.prayer && touched.prayer 
                                                ? 'border-red-500 dark:border-red-400' 
                                                : 'border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400'
                                        } shadow-lg rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-400/30 resize-none`} 
                                        rows={6}
                                    ></textarea>
                                    {errors.prayer && touched.prayer && (
                                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 animate-fade-in">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.prayer}
                                        </p>
                                    )}
                                </div>

                                {/* Urgent Checkbox */}
                                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 rounded-xl border-2 border-red-200 dark:border-red-800">
                                    <input
                                        type="checkbox"
                                        id="isUrgent"
                                        name="isUrgent"
                                        checked={formData.isUrgent}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
                                    />
                                    <label htmlFor="isUrgent" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        This is an urgent prayer request
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 font-bold text-white text-base bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 rounded-xl shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            Submit Prayer Request
                                        </>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                    Your prayer request will be kept confidential and shared only with our prayer team.
                                </p>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

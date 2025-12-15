'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for beginners',
            monthlyPrice: 49,
            yearlyPrice: 470,
            features: [
                '4 lessons per month',
                '1-on-1 video sessions',
                'Certified tutor',
                'Progress tracking',
                'Email support',
            ],
            popular: false,
        },
        {
            name: 'Professional',
            description: 'Most popular',
            monthlyPrice: 89,
            yearlyPrice: 850,
            features: [
                '8 lessons per month',
                '1-on-1 video sessions',
                'Premium certified tutor',
                'Advanced progress tracking',
                'Priority support',
                'Flexible scheduling',
                'Monthly assessments',
            ],
            popular: true,
        },
        {
            name: 'Premium',
            description: 'For dedicated students',
            monthlyPrice: 149,
            yearlyPrice: 1430,
            features: [
                '16 lessons per month',
                '1-on-1 video sessions',
                'Top-tier certified tutor',
                'Comprehensive tracking',
                '24/7 priority support',
                'Flexible scheduling',
                'Weekly assessments',
                'Personalized curriculum',
            ],
            popular: false,
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                        style={{ 
                            fontFamily: "'Platform', 'Platform-fallback', 'Platform-fallback-android', 'Noto Sans', 'NotoSans-fallback', 'NotoSans-fallback-android', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Choose the perfect plan for you
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Flexible pricing options to match your learning goals
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-3 p-1 bg-white rounded-full border border-border">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${billingCycle === 'monthly'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-foreground hover:text-primary'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${billingCycle === 'yearly'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-foreground hover:text-primary'
                                }`}
                        >
                            Yearly
                            <span className="ml-2 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl bg-white border-2 transition-all duration-300 ${plan.popular
                                    ? 'border-primary shadow-xl scale-105'
                                    : 'border-border hover:border-primary/30 hover:shadow-lg'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {plan.name}
                                </h3>

                                <p className="text-muted-foreground mb-6">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-foreground">
                                            ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                                        </span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                    {billingCycle === 'yearly' && (
                                        <p className="text-sm text-muted-foreground mt-2">
                                            Billed ${plan.yearlyPrice} annually
                                        </p>
                                    )}
                                </div>

                                <button 
                                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all mb-6 hover:opacity-90 ${plan.popular ? 'shadow-lg' : ''}`}
                                    style={plan.popular 
                                        ? { backgroundColor: '#121117', color: '#ffffff' }
                                        : { backgroundColor: '#F5F5F5', color: '#121117' }
                                    }
                                >
                                    Get Started
                                </button>

                                <div className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

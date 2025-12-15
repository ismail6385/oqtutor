"use client"

import { useState } from "react"
import { Save, Globe, Mail, Bell, Shield, Palette, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "OQTutor",
        siteEmail: "admin@oqtutor.com",
        supportEmail: "support@oqtutor.com",
        phoneNumber: "+971 50 123 4567",
        address: "Dubai, UAE",
        currency: "USD",
        timezone: "Asia/Dubai",
        language: "English",
        emailNotifications: true,
        smsNotifications: false,
        bookingNotifications: true,
        marketingEmails: false,
        maintenanceMode: false,
        allowRegistration: true,
        requireEmailVerification: true,
        sessionTimeout: "30"
    })

    const handleSave = () => {
        // Save settings logic here
        alert("Settings saved successfully!")
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage your application settings and preferences</p>
                </div>
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                </Button>
            </div>

            {/* General Settings */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <CardTitle>General Settings</CardTitle>
                    </div>
                    <CardDescription>Basic information about your platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Site Name</label>
                            <input
                                type="text"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Site Email</label>
                            <input
                                type="email"
                                value={settings.siteEmail}
                                onChange={(e) => setSettings({ ...settings, siteEmail: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Support Email</label>
                            <input
                                type="email"
                                value={settings.supportEmail}
                                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Phone Number</label>
                            <input
                                type="tel"
                                value={settings.phoneNumber}
                                onChange={(e) => setSettings({ ...settings, phoneNumber: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Currency</label>
                            <select
                                value={settings.currency}
                                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="USD">USD - US Dollar</option>
                                <option value="AED">AED - UAE Dirham</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Timezone</label>
                            <select
                                value={settings.timezone}
                                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="Asia/Dubai">Asia/Dubai (GMT+4)</option>
                                <option value="America/New_York">America/New_York (EST)</option>
                                <option value="Europe/London">Europe/London (GMT)</option>
                                <option value="Asia/Karachi">Asia/Karachi (PKT)</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Address</label>
                        <textarea
                            value={settings.address}
                            onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                            rows={3}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        <CardTitle>Notification Settings</CardTitle>
                    </div>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Email Notifications</p>
                            <p className="text-xs text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.emailNotifications}
                                onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">SMS Notifications</p>
                            <p className="text-xs text-muted-foreground">Receive notifications via SMS</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.smsNotifications}
                                onChange={(e) => setSettings({ ...settings, smsNotifications: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Booking Notifications</p>
                            <p className="text-xs text-muted-foreground">Get notified about new bookings</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.bookingNotifications}
                                onChange={(e) => setSettings({ ...settings, bookingNotifications: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Marketing Emails</p>
                            <p className="text-xs text-muted-foreground">Receive marketing and promotional emails</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.marketingEmails}
                                onChange={(e) => setSettings({ ...settings, marketingEmails: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle>Security Settings</CardTitle>
                    </div>
                    <CardDescription>Configure security and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Maintenance Mode</p>
                            <p className="text-xs text-muted-foreground">Put the site in maintenance mode</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.maintenanceMode}
                                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Allow Registration</p>
                            <p className="text-xs text-muted-foreground">Allow new users to register</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.allowRegistration}
                                onChange={(e) => setSettings({ ...settings, allowRegistration: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-foreground">Require Email Verification</p>
                            <p className="text-xs text-muted-foreground">Users must verify their email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.requireEmailVerification}
                                onChange={(e) => setSettings({ ...settings, requireEmailVerification: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Session Timeout (minutes)</label>
                        <input
                            type="number"
                            value={settings.sessionTimeout}
                            onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                            className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

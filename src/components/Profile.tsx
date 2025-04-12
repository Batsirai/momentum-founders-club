
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  // Placeholder user data - will be fetched from Supabase later
  const userData = {
    name: 'Jane Founder',
    goalType: 'revenue',
    startValue: 0,
    goalValue: 99000,
    currentValue: 15000,
    publicProfile: true,
    autoSkip: false,
    externalLinks: [
      { title: 'My Product', url: 'https://myproduct.com' },
      { title: 'Twitter', url: 'https://twitter.com/janefounder' },
    ],
    stripeConnected: false,
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Goal Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Goal Settings</CardTitle>
              <CardDescription>
                Configure your $99K goal and tracking preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="goalType">Goal Type</Label>
                  <Select defaultValue={userData.goalType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Revenue</SelectItem>
                      <SelectItem value="users">Users</SelectItem>
                      <SelectItem value="paying_users">Paying Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startValue">Starting Value</Label>
                  <div className="flex">
                    {userData.goalType === 'revenue' && (
                      <div className="flex items-center bg-gray-100 px-3 border border-r-0 rounded-l-md">
                        $
                      </div>
                    )}
                    <Input 
                      id="startValue"
                      type="number" 
                      placeholder="Starting value"
                      defaultValue={userData.startValue}
                      className={userData.goalType === 'revenue' ? 'rounded-l-none' : ''}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goalValue">Goal Value</Label>
                  <div className="flex">
                    {userData.goalType === 'revenue' && (
                      <div className="flex items-center bg-gray-100 px-3 border border-r-0 rounded-l-md">
                        $
                      </div>
                    )}
                    <Input 
                      id="goalValue"
                      type="number" 
                      placeholder="Goal value"
                      defaultValue={userData.goalValue}
                      className={userData.goalType === 'revenue' ? 'rounded-l-none' : ''}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentValue">Current Value</Label>
                  <div className="flex">
                    {userData.goalType === 'revenue' && (
                      <div className="flex items-center bg-gray-100 px-3 border border-r-0 rounded-l-md">
                        $
                      </div>
                    )}
                    <Input 
                      id="currentValue"
                      type="number" 
                      placeholder="Current value"
                      defaultValue={userData.currentValue}
                      className={userData.goalType === 'revenue' ? 'rounded-l-none' : ''}
                    />
                  </div>
                </div>

                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Save Goal Settings
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
              <CardDescription>
                Add links to your product, social profiles, or other relevant pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.externalLinks.map((link, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input 
                      placeholder="Link Title" 
                      defaultValue={link.title}
                      className="flex-grow-0 w-1/3"
                    />
                    <Input 
                      placeholder="URL" 
                      defaultValue={link.url}
                      className="flex-grow"
                    />
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                      <TrashIcon className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="flex items-center">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add New Link
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Save Links
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Visibility Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Visibility</CardTitle>
              <CardDescription>
                Control how your profile appears to others
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="publicProfile" className="text-base">Public Profile</Label>
                  <p className="text-sm text-gray-500">Show your profile on the leaderboard</p>
                </div>
                <Switch id="publicProfile" checked={userData.publicProfile} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoSkip" className="text-base">Auto-Skip</Label>
                  <p className="text-sm text-gray-500">Automatically use a skip token when you miss a check-in</p>
                </div>
                <Switch id="autoSkip" checked={userData.autoSkip} />
              </div>
            </CardContent>
          </Card>

          {/* Stripe Connection */}
          <Card className={userData.stripeConnected ? "border-green-500" : ""}>
            <CardHeader>
              <CardTitle>Stripe Connection</CardTitle>
              <CardDescription>
                Connect your Stripe account to automatically sync revenue and user data
              </CardDescription>
            </CardHeader>
            <CardContent>
              {userData.stripeConnected ? (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm mb-4">
                    Your Stripe account is connected
                  </div>
                  <Button variant="outline" className="w-full">
                    Disconnect Stripe
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Connect your Stripe account to automatically track your revenue and user metrics.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Connect Stripe Account
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

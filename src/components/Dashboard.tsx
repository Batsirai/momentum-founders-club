
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { FireIcon, CalendarIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  // Placeholder data - this will be fetched from Supabase later
  const userData = {
    name: 'Jane Founder',
    goalType: 'revenue',
    startValue: 0,
    goalValue: 99000,
    currentValue: 15000,
    streak: 4,
    lastCheckin: '2025-04-04T12:00:00Z',
    skipTokensRemaining: 2,
  };

  // Calculate progress percentage
  const progressPercentage = (userData.currentValue / userData.goalValue) * 100;

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Handle check-in submission
  const handleSubmitCheckin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Check-in submitted');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Goal Progress Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Goal Progress</CardTitle>
            <CardDescription>
              Track your journey to {formatCurrency(userData.goalValue)} in {userData.goalType}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between mb-1 font-medium">
                <span>{formatCurrency(userData.currentValue)}</span>
                <span>{formatCurrency(userData.goalValue)}</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <p className="text-sm text-gray-500">
                You've reached {progressPercentage.toFixed(1)}% of your goal
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Streak Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FireIcon className="h-5 w-5 text-orange-500 mr-2" />
              Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {userData.streak}
              </div>
              <p className="text-sm text-gray-500">consecutive weeks</p>
              {userData.streak >= 3 && (
                <div className="mt-4 flex justify-center">
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <TrophyIcon className="h-4 w-4 mr-1" />
                    {userData.streak >= 10 ? '10+ Week Streak!' : 
                     userData.streak >= 5 ? '5+ Week Streak!' : '3+ Week Streak!'}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Check-in Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
            Weekly Check-in
          </CardTitle>
          <CardDescription>
            Share your progress for this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitCheckin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">What did you accomplish this week?</label>
              <Textarea 
                placeholder="I shipped a new feature, acquired 5 new users, and increased revenue by $500..."
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">What's your main focus for next week?</label>
              <Textarea 
                placeholder="Next week I plan to..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Current {userData.goalType} value</label>
              <div className="flex">
                {userData.goalType === 'revenue' && (
                  <div className="flex items-center bg-gray-100 px-3 border border-r-0 rounded-l-md">
                    $
                  </div>
                )}
                <Input 
                  type="number" 
                  placeholder={`Enter your current ${userData.goalType}`}
                  defaultValue={userData.currentValue}
                  className={userData.goalType === 'revenue' ? 'rounded-l-none' : ''}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700"
            >
              Submit Check-in
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Skip Tokens Info */}
      <Card>
        <CardHeader>
          <CardTitle>Skip Tokens Remaining</CardTitle>
          <CardDescription>
            Use these when you need to skip a week without penalty
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(userData.skipTokensRemaining)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-purple-100 border-2 border-purple-300 flex items-center justify-center text-purple-600 font-bold mr-2">
                    ✓
                  </div>
                ))}
                {[...Array(3 - userData.skipTokensRemaining)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold mr-2">
                    ✓
                  </div>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {userData.skipTokensRemaining} of 3 tokens available
              </span>
            </div>
            <Button variant="outline" size="sm">
              Use Skip Token
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FireIcon, TrophyIcon, LinkIcon } from '@heroicons/react/24/outline';

const Leaderboard = () => {
  // Placeholder data - will be fetched from Supabase later
  const foundersByStreak = [
    { name: 'Sarah Johnson', streak: 12, goalType: 'revenue', progress: 45, externalLinks: [{ title: 'Project', url: 'https://project1.com' }] },
    { name: 'Alex Chen', streak: 10, goalType: 'users', progress: 67, externalLinks: [{ title: 'Twitter', url: 'https://twitter.com/alexchen' }] },
    { name: 'Miguel Lopez', streak: 9, goalType: 'paying_users', progress: 32, externalLinks: [{ title: 'Product', url: 'https://product3.com' }] },
    { name: 'Jordan Taylor', streak: 8, goalType: 'revenue', progress: 78, externalLinks: [{ title: 'LinkedIn', url: 'https://linkedin.com/jordantaylor' }] },
    { name: 'Emma Wilson', streak: 7, goalType: 'users', progress: 54, externalLinks: [{ title: 'Website', url: 'https://emmawilson.com' }] },
  ];

  const foundersByProgress = [
    { name: 'Jordan Taylor', streak: 8, goalType: 'revenue', progress: 78, externalLinks: [{ title: 'LinkedIn', url: 'https://linkedin.com/jordantaylor' }] },
    { name: 'Alex Chen', streak: 10, goalType: 'users', progress: 67, externalLinks: [{ title: 'Twitter', url: 'https://twitter.com/alexchen' }] },
    { name: 'Emma Wilson', streak: 7, goalType: 'users', progress: 54, externalLinks: [{ title: 'Website', url: 'https://emmawilson.com' }] },
    { name: 'Sarah Johnson', streak: 12, goalType: 'revenue', progress: 45, externalLinks: [{ title: 'Project', url: 'https://project1.com' }] },
    { name: 'Miguel Lopez', streak: 9, goalType: 'paying_users', progress: 32, externalLinks: [{ title: 'Product', url: 'https://product3.com' }] },
  ];

  const getGoalTypeLabel = (goalType: string) => {
    switch (goalType) {
      case 'revenue': return 'Revenue';
      case 'users': return 'Users';
      case 'paying_users': return 'Paying Users';
      default: return goalType;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">First99K Leaderboard</h1>
        <p className="text-gray-500 text-lg">
          See how other founders are progressing toward their $99K goals
        </p>
      </div>
      
      <Tabs defaultValue="streak" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="streak" className="text-base">
            <FireIcon className="h-5 w-5 mr-2" />
            Top Streaks
          </TabsTrigger>
          <TabsTrigger value="progress" className="text-base">
            <TrophyIcon className="h-5 w-5 mr-2" />
            Goal Progress
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="streak">
          <Card>
            <CardHeader>
              <CardTitle>Founders with the Longest Check-in Streaks</CardTitle>
              <CardDescription>
                Consistency is key - these founders have maintained the longest streaks of weekly check-ins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-4">Rank</th>
                      <th className="text-left font-medium p-4">Founder</th>
                      <th className="text-center font-medium p-4">Streak</th>
                      <th className="text-center font-medium p-4">Goal Type</th>
                      <th className="text-right font-medium p-4">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foundersByStreak.map((founder, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold">
                            {index + 1}
                          </div>
                        </td>
                        <td className="p-4 font-medium">{founder.name}</td>
                        <td className="p-4 text-center">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm bg-orange-100 text-orange-800">
                            <FireIcon className="h-4 w-4 mr-1" />
                            {founder.streak} weeks
                          </div>
                        </td>
                        <td className="p-4 text-center text-gray-500">
                          {getGoalTypeLabel(founder.goalType)}
                        </td>
                        <td className="p-4 text-right">
                          {founder.externalLinks.map((link, i) => (
                            <a 
                              key={i}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-600 hover:text-purple-800"
                            >
                              <LinkIcon className="h-4 w-4 mr-1" />
                              {link.title}
                            </a>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Founders with the Most Progress Toward Their Goals</CardTitle>
              <CardDescription>
                These founders are making the most progress toward their $99K goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-4">Rank</th>
                      <th className="text-left font-medium p-4">Founder</th>
                      <th className="text-center font-medium p-4">Progress</th>
                      <th className="text-center font-medium p-4">Goal Type</th>
                      <th className="text-right font-medium p-4">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foundersByProgress.map((founder, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold">
                            {index + 1}
                          </div>
                        </td>
                        <td className="p-4 font-medium">{founder.name}</td>
                        <td className="p-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-purple-600 h-2.5 rounded-full" 
                              style={{ width: `${founder.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-center text-sm mt-1">{founder.progress}%</div>
                        </td>
                        <td className="p-4 text-center text-gray-500">
                          {getGoalTypeLabel(founder.goalType)}
                        </td>
                        <td className="p-4 text-right">
                          {founder.externalLinks.map((link, i) => (
                            <a 
                              key={i}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-600 hover:text-purple-800"
                            >
                              <LinkIcon className="h-4 w-4 mr-1" />
                              {link.title}
                            </a>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-8">
        <p className="text-gray-500 mb-4">Want to appear on the leaderboard?</p>
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <a href="/signup">Join First99K</a>
        </Button>
      </div>
    </div>
  );
};

export default Leaderboard;

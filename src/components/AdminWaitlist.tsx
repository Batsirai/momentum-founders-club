
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const AdminWaitlist = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Placeholder data - will be fetched from Supabase later
  const waitlistedUsers = [
    { id: 1, name: 'Emma Wilson', email: 'emma@startup.com', date: '2025-04-10T14:30:00Z', notes: 'Working on a productivity SaaS' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus@indiehacker.com', date: '2025-04-09T10:15:00Z', notes: 'Building a newsletter platform' },
    { id: 3, name: 'Sophia Chen', email: 'sophia@productdev.io', date: '2025-04-08T16:45:00Z', notes: 'Creating a design tool for developers' },
    { id: 4, name: 'James Rodriguez', email: 'james@webflow.expert', date: '2025-04-07T13:20:00Z', notes: 'Launching a Webflow template business' },
    { id: 5, name: 'Ava Patel', email: 'ava@digitalmarketer.co', date: '2025-04-06T09:10:00Z', notes: 'Developing a social media scheduling tool' },
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Handle approving a user
  const handleApprove = (userId: number) => {
    console.log(`Approving user ${userId}`);
  };

  // Handle rejecting a user
  const handleReject = (userId: number) => {
    console.log(`Rejecting user ${userId}`);
  };

  // Filter users based on search query
  const filteredUsers = waitlistedUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Waitlist Management</h1>
          <p className="text-gray-500">Approve or reject users waiting to join First99K</p>
        </div>
        <Badge variant="outline" className="bg-purple-100 text-purple-800 text-sm">
          {waitlistedUsers.length} Users Waiting
        </Badge>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Users</CardTitle>
          <CardDescription>
            Find users by name, email, or notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search waitlisted users..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Waitlisted Users</CardTitle>
          <CardDescription>
            Review and manage users waiting for approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-4">Name</th>
                  <th className="text-left font-medium p-4">Email</th>
                  <th className="text-left font-medium p-4">Request Date</th>
                  <th className="text-left font-medium p-4">Notes</th>
                  <th className="text-right font-medium p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">{formatDate(user.date)}</td>
                      <td className="p-4 text-gray-500">{user.notes}</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleApprove(user.id)}
                          >
                            <CheckIcon className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                            onClick={() => handleReject(user.id)}
                          >
                            <XMarkIcon className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      No users found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminWaitlist;

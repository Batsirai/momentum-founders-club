
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 gradient-text">Your Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input placeholder="Your full name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="your@email.com" disabled />
            </div>
            <div>
              <Label>Bio</Label>
              <Input placeholder="Tell us about yourself" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;

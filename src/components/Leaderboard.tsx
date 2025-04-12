
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const leaderboardData = [
  { rank: 1, name: "Sarah Johnson", goal: "$50K", progress: "75%" },
  { rank: 2, name: "Michael Chen", goal: "$75K", progress: "60%" },
  { rank: 3, name: "Elena Rodriguez", goal: "$99K", progress: "50%" },
];

const Leaderboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 gradient-text">Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((entry) => (
                <TableRow key={entry.rank}>
                  <TableCell>{entry.rank}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.goal}</TableCell>
                  <TableCell>{entry.progress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { tableData } from "@/constants/table";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <div className="space-y-2 mb-2">
        <h1>Good evening, Alex</h1>
        <p className="text-gray-500">
          You are doing great, you&apos;ve earned $1,230 this week!
        </p>
      </div>
      <Card className="mb-2 flex-1 w-full flex flex-col lg:flex-row justify-between gap-4">
        <CardContent className="flex flex-col items-start">
          <p className="text-gray-700 text-[18px] font-medium">Earnings</p>
          <h2 className="tracking-tighter">$9,342</h2>
        </CardContent>
        <CardContent className="flex flex-col items-start">
          <p className="text-gray-700 text-[18px] font-medium">Clicks</p>
          <h2 className="tracking-tighter">2,302</h2>
        </CardContent>
        <CardContent className="flex flex-col items-start">
          <p className="text-gray-700 text-[18px] font-medium">Conversions</p>
          <h2 className="tracking-tighter">192</h2>
        </CardContent>
        <CardContent className="flex flex-col items-start">
          <p className="text-gray-700 text-[18px] font-medium">CR</p>
          <h2 className="tracking-tighter">8.4%</h2>
        </CardContent>
      </Card>
      <h2>Top 5 campaigns</h2>
      <Table>
        <TableCaption>A list of your top 5 campaigns.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>CR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>${item.revenue}</TableCell>
              <TableCell>{item.clicks}</TableCell>
              <TableCell>{item.cr}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2>Quick actions</h2>
      <div className="space-y-2">
        <div className="flex justify-between items-center border p-4 rounded-2xl">
          <p>View FAQ for quick answers to common questions</p>
          <Link href="/" className="flex gap-2">
            Go to FAQ <ArrowBigRight />
          </Link>
        </div>
        <div className="flex justify-between items-center border p-4 rounded-2xl">
          <p>Need help? Contact support team.</p>
          <Button asChild className="bg-blue-500">
            <Link href="/" className="flex gap-2">
              Contact support
            </Link>
          </Button>
        </div>
        <div className="flex justify-between items-center border p-4 rounded-2xl">
          <p>Want to learn more about our platform?</p>
          <Link href="/" className="flex gap-2">
            View our Help center <ArrowBigRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

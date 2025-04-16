"use client"
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import { redirect } from "next/navigation";


export default function NotFound() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <FileQuestion className="h-24 w-24 text-indigo-600 mx-auto" />
          <h1 className="mt-6 text-6xl font-bold text-gray-900">404</h1>
          <p className="mt-4 text-xl text-gray-600">Page not found</p>
          <p className="mt-2 text-gray-500">
            Sorry, we couldn`t find the page you`re looking for.
          </p>
        </div>
        <div className="space-y-4">
          <Button
            onClick={() => redirect("/courses")}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
}
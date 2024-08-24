"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner"; // Import the toast library

export const InterviewItemCard = ({ interview }: { interview: any }) => {
  const [loading, setLoading] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const router = useRouter();

  const handleRedirectRetakePage = () => {
    setStartLoading(true);
    setTimeout(() => {
      router.push(`/dashboard/interview/${interview.mockId}`);
      setStartLoading(false);
    }, 1400);
  };

  const handleRedirectFeedbackPage = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/dashboard/interview/${interview.mockId}/feedback`);
      setLoading(false);
    }, 1400);
  };

  const handleDeleteInterview = async () => {
    setDeleteLoading(true);
    try {
      await db
        .delete(MockInterview)
        .where(eq(MockInterview.mockId, interview.mockId));

      toast.success("Interview deleted successfully");
      window.location.reload();
      setDeleteLoading(false);
    } catch (error) {
      console.error("Error deleting interview:", error);
      toast.error("Failed to delete interview");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="border border-gray-400 shadow-sm rounded-lg p-3 flex flex-col gap-2 col-span-2">
      <div>
        <h2 className="font-bold text-primary text-lg capitalize">
          {interview?.jobPosition}
        </h2>
        <h2 className="text-sm text-gray-600">
          {interview?.jobExperience} Years of Experience
        </h2>
        <h2 className="text-sm text-gray-600 capitalize">
          Company - {interview?.company}
        </h2>
        <p className="text-xs text-gray-500">
          Created At : <span>{interview?.createdAt}</span>
        </p>
      </div>
      <div className="w-full flex items-center justify-end gap-4">
        <Button
          size="sm"
          onClick={handleRedirectFeedbackPage}
          isLoading={loading}
          loadingText="Loading"
        >
          Feedback
        </Button>
        <Button size="sm" onClick={handleDeleteInterview}>
          Delete
        </Button>
        <Button
          size="sm"
          isLoading={startLoading}
          loadingText="Starting"
          onClick={handleRedirectRetakePage}
        >
          Retake
        </Button>
      </div>
    </div>
  );
};

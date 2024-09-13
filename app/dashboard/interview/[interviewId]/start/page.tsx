"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { QuestionsSection } from "./_components/QuestionsSection";
import { WebCam } from "./_components/WebCam";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const InterviewQuestion = ({ params }: { params: { interviewId: string } }) => {
  const [interviewData, setInterviewData] = useState<any>(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState<any>();
  const [loading, setLoading] = useState(false);

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * used to get mock interview details based on interview id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResponse);
    console.log(jsonMockResp);

    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  const handleRedirectStartPage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/dashboard/interview/${interviewData?.mockId}/feedback`);
      toast("Checkout Feedback 🥳", {
        action: {
          label: "Okay",
          onClick: () => toast.dismiss(),
        },
      });
    }, 1700);
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      router.push(`/dashboard`);
      toast("Escaped from fullscreen mode", {
        action: {
          label: "Okay",
          onClick: () => toast.dismiss(),
        },
      });
    }
  };
  
  useEffect(() => {
    if (
      window.location.pathname ===
      `/dashboard/interview/${params.interviewId}/start`
    ) {
      // document.addEventListener("keydown", handleEsc);
      document.addEventListener("fullscreenchange", handleFullscreenChange);
    }

    return () => {
      // document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return (
    mockInterviewQuestion && (
      <div className="flex flex-col gap-3 justify-end w-full pt-4 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <QuestionsSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />

          {/* Video audio recording */}
          <div className="flex flex-col gap-8">
            <div className="h-[70vh]">
              <WebCam mockInterviewQuestion={mockInterviewQuestion} />
            </div>
            <div className="flex justify-end w-full items-center gap-5">
              {activeQuestionIndex > 0 && (
                <Button
                  variant="outline"
                  onClick={() =>
                    setActiveQuestionIndex(activeQuestionIndex - 1)
                  }
                >
                  Previous Question
                </Button>
              )}

              {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
                <Button
                  onClick={() =>
                    setActiveQuestionIndex(activeQuestionIndex + 1)
                  }
                >
                  Next Question
                </Button>
              )}
              {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
                <Button
                  onClick={handleRedirectStartPage}
                  isLoading={loading}
                  loadingText="Redirecting"
                >
                  End Interview
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InterviewQuestion;

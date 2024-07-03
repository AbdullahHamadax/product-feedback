import { FeedbackEdit } from "@/components/feedback/feedback-edit";
import { Feedback } from "@prisma/client";

interface FeedbackWithUpvoteStatus extends Feedback {
  upvoted: boolean;
}

export default FeedbackWithUpvoteStatus
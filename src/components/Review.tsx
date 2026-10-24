import SectionHeading from "./ui/SectionHeading";
import ReviewCard from "./ReviewCard";
import type { Review as ReviewItem } from "../data/site";

type Props = {
  title: string;
  subtitle: string;
  reviews: ReviewItem[];
};

const Review = ({ title, subtitle, reviews }: Props) => {
  return (
    <section className="Review mb-44">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Review;

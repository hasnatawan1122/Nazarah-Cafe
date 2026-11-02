import { Star, Quote } from "lucide-react";
import { Card } from "./Card";

export interface TestimonialItem {
  id: number | string;
  name: string;
  rating: number;
  text: string;
  date?: string;
  role?: string;
}

interface TestimonialProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="flex flex-col justify-between h-full relative group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating
                    ? "fill-gold text-gold"
                    : "text-[#D8C7B5]"
                }`}
              />
            ))}
          </div>
          <Quote className="h-6 w-6 text-gold/30 group-hover:text-gold/60 transition-colors" />
        </div>

        <p className="text-chocolate/85 text-sm sm:text-base leading-relaxed italic font-body">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F0E4D4] flex items-center justify-between">
        <div>
          <h4 className="font-heading font-bold text-chocolate text-base">
            {testimonial.name}
          </h4>
          {testimonial.role && (
            <p className="text-xs text-chocolate/60">{testimonial.role}</p>
          )}
        </div>
        {testimonial.date && (
          <span className="text-xs text-chocolate/50 font-body">
            {testimonial.date}
          </span>
        )}
      </div>
    </Card>
  );
}


import { nanGuard } from "@/lib/numbers";
import { starRating } from "../utils/starRating";
import { Thread } from "@reactforums/core";

export function ThreadRating(props: { thread: Thread }) {
  const { thread } = props;
  const { average, rating } = starRating(
    thread.ratingsTotal,
    thread.ratingsNumber,
  );

  return (
    <>
      <ul className="star_rating star_rating_notrated">
        <li
          style={{
            width: nanGuard(rating),
          }}
          className="current_rating"
        >
          {thread.ratingsNumber} Vote(s) - {nanGuard(average)} Average
        </li>
        <li>
          <a
            className="one_star"
            title="1 star out of 5"
            href="./ratethread.php?tid=43555&amp;rating=1&amp;my_post_key=837abd0192d16abfccd99993a1cc7008"
          >
            1
          </a>
        </li>
        <li>
          <a
            className="two_stars"
            title="2 stars out of 5"
            href="./ratethread.php?tid=43555&amp;rating=2&amp;my_post_key=837abd0192d16abfccd99993a1cc7008"
          >
            2
          </a>
        </li>
        <li>
          <a
            className="three_stars"
            title="3 stars out of 5"
            href="./ratethread.php?tid=43555&amp;rating=3&amp;my_post_key=837abd0192d16abfccd99993a1cc7008"
          >
            3
          </a>
        </li>
        <li>
          <a
            className="four_stars"
            title="4 stars out of 5"
            href="./ratethread.php?tid=43555&amp;rating=4&amp;my_post_key=837abd0192d16abfccd99993a1cc7008"
          >
            4
          </a>
        </li>
        <li>
          <a
            className="five_stars"
            title="5 stars out of 5"
            href="./ratethread.php?tid=43555&amp;rating=5&amp;my_post_key=837abd0192d16abfccd99993a1cc7008"
          >
            5
          </a>
        </li>
      </ul>
    </>
  );
}

import { Metadata } from "next";
import { Link } from "../../components/Link";
import NextLink from "next/link";
import { Undo2 } from "lucide-react";

export const metadata: Metadata = {
  title: "I'm building another AI start-up",
  description: "More news later this year.",
};

export default function AnotherStartup() {
  return (
    <>
      <header className="space-y-1">
        <h1 className="font-medium">I'm building another AI start-up</h1>
        <time className="text-neutral-500/75">Updated July 23, 2025</time>
      </header>

      <section className="space-y-4">
        <p>
          Hey, you came here from Lark 👋 I'm Jeffrey, a 23 year old software
          engineer in Sydney who's a builder and start-up enthusiast at heart.
        </p>
        <p>
          At TikTok, I was on the Live Campaign - Revenue team. Before that, I
          was an early engineer at{" "}
          <Link href="https://www.smartcompany.com.au/startupsmart/relevance-ai-agent-37-million-series-b-raise/">
            Relevance AI
          </Link>{" "}
          from seed to Series A designing and building their core agentic AI
          products — then, a founding engineer at{" "}
          <Link href="https://www.smartcompany.com.au/startupsmart/everlab-raise-15-million-expand-ai-preventive-healthcare/">
            Everlab
          </Link>{" "}
          building infra, tooling and apps to help people live longer.
        </p>
        <p>
          With experience in big tech and start-ups now, I've decided it's time
          to step away and build something I'm proud of. It's another AI
          start-up, but as I and my co-founder have a sharp eye for great design
          and product, we hope to do something cool 🪄🧙
        </p>
      </section>

      <section className="space-y-4 mt-4">
        <div className="w-12 border-t border-neutral-300" />
        <section className="space-y-2">
          <h2 className="font-medium">What's your idea?</h2>
          <p>It's a secret — you'll find out later this year 😄</p>
        </section>
        <section className="space-y-2">
          <h2 className="font-medium">Where can I follow along?</h2>
          <p>
            <Link href="http://instagram.com/jeffreydyao">@jeffreydyao</Link> on
            Instagram, where I'll post behind-the-scenes content, and my{" "}
            <Link href="https://www.linkedin.com/in/jeffreydyao/">
              LinkedIn
            </Link>{" "}
            for more formal announcements. You shuold really follow along, we're
            trying to do something great!
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-medium">Who's your co-founder?</h2>
          <p>
            I'm doing this together with my partner, Megan, who was previously a
            PM at a Sydney start-up and worked in Strategy/Ops at Uber.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-medium">Are you looking for engineers?</h2>
          <p>
            Not at this point in time, and probably not for a long while. The
            best place to stay updated is my{" "}
            <Link href="https://www.linkedin.com/in/jeffreydyao/">
              LinkedIn
            </Link>{" "}
            😊
          </p>
        </section>
      </section>

      <section className="space-y-4 mt-4">
        <div className="w-12 border-t border-neutral-300" />
        <section className="space-y-2">
          <h2 className="font-medium">Can I stay in touch with you?</h2>
          <p>
            I'm always interested in being friends with people who love to build
            and/or are passionate about engineering / design! Please feel free
            to reach out 😄
          </p>
          <p>
            And if you'd like advice on start-ups here in Sydney or in general,
            feel free to also reach out - the way I got started was through the
            kindness of people who offered their time generously to me, so in
            the same way, I'm always more than happy to chat.
          </p>
        </section>
      </section>
    </>
  );
}

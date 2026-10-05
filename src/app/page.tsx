import headerDesktop from "@/assets/header-desktop.webp";
import headerMobile from "@/assets/header-mobile.webp";
import { stats } from "@/data";

export default function Home() {
  return (
    <article className="bg-card shadow-card w-full max-w-81.75 overflow-hidden rounded-lg lg:grid lg:max-w-277.5 lg:grid-cols-[19fr_18fr]">
      <picture className="bg-accent isolate block lg:order-2">
        <source
          media="(min-width: 64rem)"
          srcSet={headerDesktop.src}
          width={headerDesktop.width}
          height={headerDesktop.height}
        />
        <img
          src={headerMobile.src}
          width={headerMobile.width}
          height={headerMobile.height}
          alt=""
          fetchPriority="high"
          className="block w-full object-cover opacity-75 mix-blend-multiply lg:h-full"
        />
      </picture>

      <div className="px-8 pt-10 pb-8 text-center lg:pt-17.75 lg:pr-0 lg:pb-14.75 lg:pl-18 lg:text-left">
        <h1 className="text-heading lg:text-heading-lg font-bold lg:max-w-100.75">
          Get <span className="text-accent">insights</span> that help your
          business grow.
        </h1>

        <p className="text-body mt-4 text-white/75 lg:mt-6.25 lg:max-w-93.5">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <dl className="mt-10 flex flex-col gap-6 lg:mt-18 lg:flex-row lg:gap-15.5">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse gap-0.5">
              <dt className="text-label font-label text-white/60 uppercase">
                {label}
              </dt>
              <dd className="text-stat font-bold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

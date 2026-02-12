import Link from "next/link";
import Image from "next/image";
import ButtonWithIconDemo from "@/components/shadcn-space/button/button-01";

export default function ProcessSteps() {
  return (
    <section className="mx-5 mt-14 flex max-w-lg flex-col justify-between px-4 pb-20 sm:mx-auto md:mb-[6.25rem] md:max-w-lg md:pb-0 lg:mx-auto lg:mb-0 lg:w-[76rem] lg:max-w-full lg:flex-row lg:px-0 xl:w-[82rem] 2xl:w-[94rem]">
      <div className="relative max-w-80 lg:min-h-[61rem] lg:w-[37rem]">
        <h2 className="site-display-l text-site-neutrals-700 mb-[4.75rem] font-medium sm:w-auto">
          Our process. Simple, seamless, streamlined
          <span className="text-site-primary-600">.</span>
        </h2>

        <div className="absolute right-0 -mt-12 hidden lg:block lg:w-[38vw] 2xl:w-[545px]">
          <Image
            alt="Proceso ilustración"
            loading="lazy"
            width={1632}
            height={1732}
            className="w-full"
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1632/dpr_auto/f_auto/q_auto/v1/www/core/our_process_kfiyw2?_a=BAVAfVDW0"
          />
        </div>
      </div>

      <div className="relative lg:w-[54rem] md:w-[32rem]">
        <div className="relative z-10">
          <div className="-z-1 border-site-neutral-100 absolute left-[1.5rem] top-0 mt-3 h-[calc(100%+4.3rem)] border-r-2 border-dashed lg:left-[9rem] lg:h-[calc(100%+4.5rem)]"></div>

          <div className="relative mb-14 flex lg:pl-[120px]">
            <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
              <Image
                alt="icon call"
                loading="lazy"
                decoding="async"
                src="/static/phone_owvxn3.svg"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
              <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 1</span>
              <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium text-3xl">Join exploration call.</h3>
              <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.
              </p>
            </div>
          </div>

          <div className="relative mb-14 flex lg:pl-[120px]">
            <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
              <Image
                alt="icon person"
                loading="lazy"
                decoding="async"
                src="/static/person_kkflzw.svg"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
              <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 2</span>
              <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium text-3xl">Discuss solution and team structure.</h3>
              <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.
              </p>
            </div>
          </div>

          <div className="relative mb-14 flex lg:pl-[120px]">
            <div className="relative mt-[10px] inline-block h-12 w-12 align-top">
              <Image
                alt="icon track"
                loading="lazy"
                decoding="async"
                src="/static/track_em3zly.svg"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-5 inline-block w-[calc(100%-68px)] align-top md:ml-6 lg:w-[520px] md:w-[440px]">
              <span className="text-site-neutrals-400 site-overline-m mb-2 uppercase">step 3</span>
              <h3 className="site-display-s text-site-neutrals-800 mb-2 font-medium text-3xl">Get started and track performance.</h3>
              <p className="site-paragraph-m text-site-neutrals-600 [&_a]:underline [&>p:not(:last-child)]:pb-4">
                Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.
              </p>
            </div>
          </div>

          <div className="relative float-left">
            <div className="-z-1 absolute ml-6 mt-6 w-16 border-t-2 border-dashed lg:ml-36 lg:mt-7"></div>
            <div className="relative ml-[4.5rem] lg:ml-48">
              <Link
                href="https://www.bairesdev.com/start/basic-details/"
                target="_blank"
                rel="noreferrer"
                aria-label="Schedule a Call"
              >
                <ButtonWithIconDemo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

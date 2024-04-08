"use client";
import Brain from '@/components/brain';
import { delay, motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';


const AboutPage = () => {
  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className=' h-full overflow-scroll  lg:flex' ref={containerRef}>
        {/* Text Container */}
        <div className='  p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48  flex flex-col gap-24 md:gap-32 lg:gap-48  lg:w-2/3 lg:pr-0 xl:1/2 xl:gap-64'>
          {/* Biography Container */}
          <div className=' flex flex-col gap-12 justify-center'>
            {/* Bio Title */}
            <h1 className=' font-bold text-2xl'>BIOGRAPHY</h1>
            {/* Bio Description */}
            <p className=' text-lg'>Ferdinand is a skilled Flutter Developer with over 3 years of hands-on
              experience. Throughout his career, he has been dedicated to crafting high-quality mobile applications
              using Flutter. his expertise includes building robust and user-friendly interfaces, implementing
              efficient functionalities, and ensuring seamless user experiences. he thrives in a dynamic development environment and continuously
              stays abreast of the latest trends and technologies in the ever-evolving
              world of mobile app development</p>

            {/* Bio Signature */}

            <div className=' self-end'>
              <svg width="110" height="91" viewBox="0 0 110 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.165 36.461C67.4267 36.6419 68.8739 34.4814 69.1801 34.2774C69.8208 33.8505 70.3178 32.768 70.7712 32.1571C71.5295 31.1353 72.2589 30.0992 73.0272 29.0838C74.9402 26.5558 76.648 24.6327 77.9028 21.8071C78.2698 20.9809 78.8376 20.2254 79.2664 19.4218C79.7015 18.6064 80.1285 17.7666 80.5906 16.9816C80.7256 16.7521 80.9089 16.7355 80.9329 16.5036C80.9662 16.1817 81.1446 15.9882 81.2082 15.6951C81.2879 15.3282 81.2413 14.9411 81.3486 14.5738C81.4589 14.1958 81.7155 13.8883 81.7483 13.4773C81.7719 13.1818 81.9299 12.683 82.0435 12.406C82.2341 11.9411 82.1572 11.3935 82.3627 10.9499C82.8351 9.93004 82.6693 9.34016 82.3251 8.28947C82.0139 7.33979 81.4514 6.72359 80.9708 5.89332C80.3693 4.85424 79.6609 4.6314 78.5359 4.3337C76.9641 3.91775 75.3759 3.61604 73.8166 3.15689C72.9288 2.89547 71.962 2.96242 71.0944 2.64647C70.5486 2.44771 70.0294 2.25593 69.4529 2.16441C67.7638 1.89628 65.9885 2.0368 64.289 2.0368C61.0885 2.0368 57.9533 2.37708 54.7614 2.55431C51.3969 2.74113 48.0292 3.11353 44.7961 4.1352C42.8777 4.7414 41.133 5.74692 39.4543 6.88581C38.0282 7.85334 37.4805 9.65739 36.5475 11.0543C35.6245 12.436 35.2031 13.936 35.0428 15.5984C34.8624 17.4681 34.5132 19.2986 34.3656 21.1776C33.9662 26.2635 34.0645 31.3844 33.9211 36.4832C33.8007 40.7618 33.2852 44.9359 32.8199 49.1799C32.2739 54.1595 32.1609 59.1999 31.7392 64.1948C31.4903 67.1439 31.632 70.1137 31.5751 73.0705C31.546 74.579 31.4793 76.0844 31.4793 77.5934C31.4793 79.5559 31.3705 81.5614 31.5067 83.5199C31.6158 85.09 31.6907 86.7559 32.0949 88.2839C32.1556 88.5133 32.3619 89.1871 32.3411 88.9503C32.2724 88.1666 31.9008 87.3916 31.6298 86.6675C31.2225 85.5794 30.7334 84.5253 30.4944 83.3782C30.2149 82.0366 29.4714 80.753 28.7982 79.5784C27.3726 77.091 25.9296 74.4457 24.7491 71.8299C23.9055 69.9605 22.7624 68.1395 21.6234 66.4563C20.7406 65.1516 20.0692 63.7826 19.2706 62.4296C16.9495 58.497 13.9027 55.0814 11.747 51.0231C11.1154 49.834 10.4392 48.6776 9.74299 47.5281C8.51023 45.4927 7.54898 43.2074 6.0496 41.3605C4.90895 39.9555 3.79333 38.4865 2.85549 36.9227C2.59324 36.4854 2.26241 36.063 2.02106 35.6183C1.85868 35.3191 2.67895 35.7363 2.98545 35.8664C5.1428 36.7824 7.19824 37.9137 9.29842 38.9573C15.1723 41.8761 21.3354 43.8645 27.656 45.451C35.7343 47.4787 43.8112 49.5937 51.9845 51.172C58.2772 52.3871 64.4805 53.1151 70.8755 53.2633C79.5773 53.465 88.3388 53.804 97.0029 52.7103C100.696 52.2442 106.315 51.7093 107.7 47.3084C109.284 42.2766 104.265 39.8666 100.423 38.5603C97.4892 37.5629 94.4432 37.2252 91.3807 37.0361C87.8445 36.8178 84.2364 36.6586 80.6972 36.9014C75.0205 37.2909 69.7811 39.6559 64.8567 42.4735C60.1099 45.1895 55.1887 48.3139 51.6972 52.6962C49.1395 55.9065 47.7045 59.545 47.1557 63.6419C46.7346 66.786 47.288 70.3242 48.9751 73.0138C50.4348 75.341 52.7904 77.2225 55.0076 78.7277C57.6947 80.5518 61.0274 81.2607 64.1727 81.62C66.8721 81.9284 69.0813 81.3894 71.5458 80.2306C72.9406 79.5747 74.2407 78.763 75.5128 77.884C76.1598 77.4369 77.0557 76.9248 77.5373 76.2464C77.8314 75.8322 77.9854 75.29 78.2623 74.857C78.6894 74.189 79.1973 73.582 79.6439 72.9287C80.0275 72.3676 80.4894 71.7416 80.793 71.128C80.8848 70.9426 80.839 70.8252 80.9708 70.6885" stroke="black" stroke-width="3" stroke-linecap="round" />
                <path d="M67.5495 65.9696C66.8043 65.923 67.0235 64.5903 66.3199 65.6126C66.1077 65.921 64.7901 68.0869 65.6853 68.2899C66.5705 68.4905 70.7196 68.0013 69.2153 66.5645C68.0869 65.4868 66.0209 63.98 64.3368 64.4823C63.2581 64.804 61.5242 66.4241 62.3537 67.7346C62.9897 68.7394 66.6954 67.8871 67.6288 67.5759C68.5457 67.2703 66.7939 65.9849 66.4588 65.9101C64.9315 65.5694 63.3089 65.8903 62.6313 67.4173C62.196 68.3983 61.4118 70.8193 63.2064 70.5506C64.1382 70.4111 65.5275 70.209 66.2704 69.5591C66.8345 69.0655 66.7689 67.9971 66.8356 67.338C66.9363 66.3421 67.3254 64.7222 66.7562 63.7882C66.27 62.9902 65.05 62.842 64.2377 63.1536C62.8837 63.6729 63.4477 65.9326 63.9402 66.8422C64.9836 68.7693 67.8591 69.2933 69.7309 68.2899C70.8124 67.7101 69.8249 66.2445 69.1558 65.811C67.9548 65.0328 65.9109 64.6844 64.9516 66.0093C64.1907 67.0601 62.9486 70.3625 63.6229 71.6612C63.8553 72.1088 65.0654 71.2348 65.0904 71.215C66.1428 70.3808 66.734 69.1858 66.9545 67.8734C67.2774 65.9524 66.1514 64.4664 64.4756 63.6692C62.5741 62.7646 65.2207 68.194 65.6655 68.627C68.7462 71.626 69.8377 65.5135 67.0735 65.5135C64.3524 65.5135 62.8117 71.304 64.1187 73.1485C65.0761 74.4998 66.9984 73.1737 67.7181 72.4148C68.9913 71.0721 69.0786 69.4923 68.5014 67.7941C67.738 65.5481 66.0422 62.5593 63.2659 63.0544C61.9046 63.2972 60.3766 64.8135 61.263 66.2869C61.872 67.2993 64.5385 68.1276 65.5862 67.3975C65.8948 67.1824 65.8146 66.0053 65.5862 65.7515C64.5135 64.5596 62.2989 66.7701 61.9372 67.5958C61.3027 69.0445 61.2618 70.758 61.3522 72.3057C61.3849 72.8655 61.3723 74.2291 62.1157 74.5169C64.3214 75.3707 63.844 71.5541 63.6229 70.6696C63.2774 69.2877 62.6912 67.7151 61.6596 66.6835" stroke="black" stroke-width="3" stroke-linecap="round" />
              </svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className=' flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* Skills Title */}
            <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className=' font-bold text-2xl'>SKILLS</motion.h1>
            {/* Skill list */}
            <motion.div
              initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}}
              className=' flex gap-4 flex-wrap'>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Html
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Supabase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                mySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Dart
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Getx
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                bloc
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Riverpod
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                provider
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Flutter
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Php
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Csharp
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Agora.io
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Mapbox
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Rive
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Figma
              </div>
            </motion.div>
            {/* Skill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            {/* Experience Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=' font-bold text-2xl'>EXPERIENCE</motion.h1 >
            {/* Experience List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=''>
              {/* Experience List Item///////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className=' flex justify-between h-48'>
                {/*Left  */}

                <div className=' w-1/3'>
                  {/* Job Title */}
                  <div className=' bg-white p-3 font-semibold rounded'>
                    Lead Flutter Developer
                  </div>
                  {/* Job Description */}
                  <div className=' p-3 text-sm italic'>
                    I developed Travely's User and Driver apps, along with the admin panel. Utilized Flutter and GetX for the frontend, and Firebase for the backend.
                  </div>
                  {/* Job Duration */}
                  <div className=' p-3 text-red-400 font-semibold text-sm'>
                    May 2023 - present
                  </div>
                  {/* Job  Company */}
                  <div className=' p-1 bg-white rounded text-sm font-semibold w-fit'>
                    Travely
                  </div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='flex justify-center w-1 h-full bg-gray-600  rounded relative'>
                    {/* Circle  */}
                    <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>
              {/* Experience List Item///////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className=' flex justify-between h-48'>
                {/*Left  */}

                <div className=' w-1/3'>

                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='flex justify-center w-1 h-full bg-gray-600  rounded relative'>
                    {/* Circle  */}
                    <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className=' bg-white p-3 font-semibold rounded'>
                    Lead Flutter Developer
                  </div>
                  {/* Job Description */}
                  <div className=' p-3 text-sm italic'>
                    I developed Travely's User and Driver apps, along with the admin panel. Utilized Flutter and GetX for the frontend, and Firebase for the backend.
                  </div>
                  {/* Job Duration */}
                  <div className=' p-3 text-red-400 font-semibold text-sm'>
                    May 2023 - present
                  </div>
                  {/* Job  Company */}
                  <div className=' p-1 bg-white rounded text-sm font-semibold w-fit'>
                    Travely
                  </div>
                </div>
              </div>
              {/* Experience List Item///////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className=' flex justify-between h-48'>
                {/*Left  */}

                <div className=' w-1/3'>
                  {/* Job Title */}
                  <div className=' bg-white p-3 font-semibold rounded'>
                    Lead Flutter Developer
                  </div>
                  {/* Job Description */}
                  <div className=' p-3 text-sm italic'>
                    I developed Travely's User and Driver apps, along with the admin panel. Utilized Flutter and GetX for the frontend, and Firebase for the backend.
                  </div>
                  {/* Job Duration */}
                  <div className=' p-3 text-red-400 font-semibold text-sm'>
                    May 2023 - present
                  </div>
                  {/* Job  Company */}
                  <div className=' p-1 bg-white rounded text-sm font-semibold w-fit'>
                    Travely
                  </div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='flex justify-center w-1 h-full bg-gray-600  rounded relative'>
                    {/* Circle  */}
                    <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>


              {/* Experience List Item///////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className=' flex justify-between h-48'>
                {/*Left  */}

                <div className=' w-1/3'>

                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='flex justify-center w-1 h-full bg-gray-600  rounded relative'>
                    {/* Circle  */}
                    <div className=' absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>

                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className=' bg-white p-3 font-semibold rounded'>
                    Lead Flutter Developer
                  </div>
                  {/* Job Description */}
                  <div className=' p-3 text-sm italic'>
                    I developed Travely's User and Driver apps, along with the admin panel. Utilized Flutter and GetX for the frontend, and Firebase for the backend.
                  </div>
                  {/* Job Duration */}
                  <div className=' p-3 text-red-400 font-semibold text-sm'>
                    May 2023 - present
                  </div>
                  {/* Job  Company */}
                  <div className=' p-1 bg-white rounded text-sm font-semibold w-fit'>
                    Travely
                  </div>
                </div>
              </div>


            </motion.div>



          </div>
        </div>
        {/* Svg Container */}
        <div className=' hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div >
  );
}

export default AboutPage
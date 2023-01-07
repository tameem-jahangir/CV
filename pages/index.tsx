import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {  AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/deved.png';
import cnn from '../public/cnn.png';
import green from '../public/green_hydrogen.png';
import search from '../public/search.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Tameem Jahangir Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-10 md:px-20 lg:px-40 dark:bg-teal-900'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Developed by TJ</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/file/d/1qpuj-rgczm_lXqEaDmiExmOL6c7V_TGD/view?usp=share_link">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Tameem Jahangir</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Computer Science student with a passion for software development.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://linkedin.com/in/tameem-jahangir-17a5b722b"><AiFillLinkedin /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} fill alt="Image of TJ"/>
          </div>
        </section>

        <section>
          <div className='text-center my-10'>
            <h3 className='text-3xl py-1'>Introduction</h3>
            <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto'>
            Digital Engineering student with a passion for Software Development. Interests
include <span className='text-teal-500'>Machine Learning</span>, <span className='text-teal-500'>Data Science</span>, <span className='text-teal-500'>Data Analysis</span>, <span className='text-teal-500'>Software Development</span>  and <span className='text-teal-500'>Web Development</span>. I am a confident communicator, and a strategic
thinker to develop software that is customized to meet a company&apos;s organizational
needs, highlight their core competencies and further their success.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={green} width={100} height={100} alt="Design 3d image."/>
              <h3 className='text-lg font-medium pt-8 pb-2'><a href='https://github.com/tameem-jahangir/VisualisationOfHydrogenLifeCycle'>Hydrogen Life Cycle</a></h3>
              <p className='py-2 max-w-xl'>
                This project is a Windows and Mac based application focusing on the industrial-scale visualization of the green hydrogen technology. It shows the whole process
                from, generating electricity from wind to production and use case of hydrogen fuel. The main objective is to provide a user with the basic understanding of each
                individual component and its role in green hydrogen production. This project used Unity, Blender and GitLab.
              </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={cnn} width={100} height={100} alt="Design 3d image."/>
              <h3 className='text-lg font-medium pt-8 pb-2'><a href='https://github.com/tameem-jahangir/VisualisationOfHydrogenLifeCycle'>CE-NBI Classification using CNN</a></h3>
              <p className='py-2 max-w-xl'>
              The objective of this project is to use an ensemble of deep learning models to identify benign
and malignant laryngeal cancer cells. There are three main Deep Learning models used for
this project consisting of EfficientNetB0V2, ResNet50V2 and DenseNet121. A dataset of
images containing the CE-NBI of multiple patients are used to train a model which would
then give the final result as benign or malignant. The project was made using Python.
              </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={search} width={100} height={100} alt="Design 3d image."/>
              <h3 className='text-lg font-medium pt-8 pb-2'><a href='https://github.com/tameem-jahangir/VisualisationOfHydrogenLifeCycle'>Search engine with result clustering.</a></h3>
              <p className='py-2 max-w-xl'>
              A search engine where the user can provide queries and the result is clustered using the Carrot2 API. The result is clustered using the most common words and grouped together.
              The project was built using flask and Python.  
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'></h3>
            <p></p>
          </div>
        </section>
      </main>
    </div>
  )
}

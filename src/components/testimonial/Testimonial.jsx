import React from 'react'

function Testimonial() {
  return (
    <div>
        <section className='text-gray-600 body-font mb-10'>
            <div className='container px-5 py-10 mx-auto'>
                <h1 className='text-center text-3xl font-bold text-black'>
                Testimonial
                </h1>
                <h2 className='text-center text-3xl font-semibold mb-10'>
                    What our <span className='text-pink-500'>customers</span> are saying 
                </h2>
                <div className='flex flex-wrap m-4'>
                    {/* Testimonial -1 */}
                    <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                        <div className='h-full text-center'>
                            <img src=''/>
                            <p className='leading-relaxed text-sm'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis sint, quisquam eaque sed cumque fuga culpa voluptatum quibusdam dicta corrupti exercitationem, vel dolore est. Excepturi iste dolor sapiente.
                            </p>
                            <span className='inline-block h-1 w-10 rounded bg-pink-500 '/>
                            <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'>Ramiz Sumra</h2>
                            <p className='text-gray-500'>Senior Product Designer</p>
                        </div>
                    </div>
                    {/* Testimonial -2 */}
                    <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                        <div className='h-full text-center'>
                            <img src=''/>
                            <p className='leading-relaxed text-sm'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aliquid itaque dolorem eveniet accusantium molestiae nulla fuga esse odio, officia distinctio error non rem nam quos consequuntur!
                            </p>
                            <span className='inline-block h-1 w-10 rounded bg-pink-500 '/>
                            <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'>Mohsin Dodhiya</h2>
                            <p className='text-gray-500'>UI Developer</p>
                        </div>
                    </div>
                    {/* Testimonial -3 */}
                    <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                        <div className='h-full text-center'>
                            <img src=''/>
                            <p className='leading-relaxed text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est praesentium deserunt, iusto dolores officia assumenda cupiditate architecto, saepe debitis error neque, veniam recusandae esse corrupti amet temporibus alias.
                            </p>
                            <span className='inline-block h-1 w-10 rounded bg-pink-500 '/>
                            <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'>Karan Shah</h2>
                            <p className='text-gray-500'>CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial
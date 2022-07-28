
function Main() {
  return (
    <>
      <section className='about padding'>
        <div className='container flex align-start'>
          <div className='flex-40'>
            <header className='sec-header'>
              <h2 className='heading'>Let us introduce</h2>
              <div className='dot-wrapper flex justify-start'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
            </header>

            <p className='text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique ut sequi voluptatibus beatae corporis repellat
              asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
              illum, recusandae nisi neque iusto culpa!
            </p>
            <p className='text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='flex-30 progress'>
            <div className='progress-item'>
              <div className='flex'>
                <h3>Web Design</h3>
                <p>85%</p>
              </div>
              <progress value='85' max='100'></progress>
            </div>
            <div className='progress-item'>
              <div className='flex'>
                <h3>Photography</h3>
                <p>90%</p>
              </div>
              <progress value='90' max='100'></progress>
            </div>
            <div className='progress-item'>
              <div className='flex'>
                <h3>Content Marketing</h3>
                <p>75%</p>
              </div>
              <progress value='75' max='100'></progress>
            </div>
            <div className='progress-item'>
              <div className='flex'>
                <h3>CMS Admin</h3>
                <p>70%</p>
              </div>
              <progress value='70' max='100'></progress>
            </div>
          </div>
          <div className='flex-30'>
            <img
              className='flexible-img about-img'
              //   src='Image/about'
              alt='About'
            />
          </div>
        </div>
      </section>
      {/* <!-- Blog --> */}
      <section className='blog padding'>
        <div className='container'>
          <header className='sec-header text-center'>
            <h2 className='heading'>Our Blog</h2>
            <div className='dot-wrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </header>
          <div className='flex wrap'>
            <article className='flex article flex-48'>
              <div className='flex-40 font-0'>
                <img
                  className='flexible-img'
                  src='image/blog-image1.jpg'
                  alt='Blog  1'
                />
              </div>

              <div className='flex-60 article-content'>
                <time datetime=''>
                  <i className='far fa-clock'></i>
                  December 22, 2017
                </time>
                <h3>How to find beautiful workspace?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className='btn btn-tertiary' href='_#'>
                  Read Article
                </a>
              </div>
            </article>
            <article className='flex article flex-48'>
              <div className='flex-40 font-0'>
                <img
                  className='flexible-img'
                  src='image/blog-image2.jpg'
                  alt='Blog  1'
                />
              </div>

              <div className='flex-60 article-content'>
                <time datetime=''>
                  <i className='far fa-clock'></i>
                  December 18, 2017
                </time>
                <h3>Woman sportwear</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className='btn btn-tertiary' href='_#'>
                  Read More
                </a>
              </div>
            </article>
            <article className='flex article flex-48'>
              <div className='flex-40 font-0'>
                <img
                  className='flexible-img'
                  src='image/blog-image3.jpg'
                  alt='Blog  1'
                />
              </div>

              <div className='flex-60 article-content'>
                <time datetime=''>
                  <i className='far fa-clock'></i>
                  December 14, 2017
                </time>
                <h3>New creative fashion</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className='btn btn-tertiary' href='_#'>
                  Read Article
                </a>
              </div>
            </article>
            <article className='flex article flex-48'>
              <div className='flex-40 font-0'>
                <img
                  className='flexible-img'
                  src='image/blog-image4.jpg'
                  alt='Blog  1'
                />
              </div>

              <div className='flex-60 article-content'>
                <time datetime=''>
                  <i className='far fa-clock'></i>
                  December 10, 2017
                </time>
                <h3>Minimalist design trend in 2018</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className='btn btn-tertiary' href='_#'>
                  View Detail
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* <!-- Work --> */}
      <section className='work padding'>
        <div className='container'>
          <header className='sec-header text-center'>
            <h2 className='heading'>Our Work</h2>
            <div className='dot-wrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </header>
          <div className='flex'>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src='image/work-image1.jpg'
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src='image/work-image2.jpg'
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src='image/work-image3.jpg'
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src='image/work-image4.jpg'
                alt='Work  1'
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section className='contact padding'>
        <div className='container'>
          <header className='sec-header text-center'>
            <h2 className='heading'>Contact Us</h2>
            <div className='dot-wrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </header>
          <div className='flex'>
            <form className='flex-60' action='index.html' method='post'>
              <fieldset>
                <div className='flex'>
                  <input
                    className='form-control flex-48'
                    type='text'
                    name='name'
                    placeholder='Full Name'
                  />
                  <input
                    className='form-control flex-48'
                    type='email'
                    name='email'
                    placeholder='Your Email'
                  />
                </div>
                <div className='flex'>
                  <input
                    className='form-control flex-48'
                    name='number'
                    type='tel'
                    placeholder='Your Phone'
                  />
                  <select className='form-control flex-48' name='budget'>
                    <option value='Budget Level'>Budget Level</option>
                    <option value='Budget Level1'>Budget Level1</option>
                    <option value='Budget Level2'>Budget Level2</option>
                    <option value='Budget Level3'>Budget Level3</option>
                  </select>
                </div>
                <textarea
                  className='form-control'
                  name='requirements'
                  placeholder='Your Requirements'
                  id=''
                  rows='6'
                ></textarea>
              </fieldset>
              <input
                type='submit'
                value='Send Message'
                className='btn btn-primary'
              />
            </form>
            <div className='flex-40 map'>
              <iframe
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991561741!3d32.206399320166405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1600510560646!5m2!1sen!2sin'
                frameborder='0'
                style={{ border: 0 }}
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
const Services = () => {
  return (
    <section className="services section component__space" id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services__container container">
        <div className="row grid">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="currentColor"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path d="M28.79,44l-9.4-9.4S31.76,5.41,56.77,7C56.77,7,60.25,30.12,28.79,44Z" />

                    <path d="M56,16.82a10.87,10.87,0,0,1-6-3.08,11,11,0,0,1-3.11-6.15" />

                    <circle cx="42.32" cy="21.44" r="5.48" />

                    <path d="M30.61,43.16,30,47.84a.24.24,0,0,0,.33.25l8-3.47A2.32,2.32,0,0,0,39.63,43l1.22-5.83" />

                    <path d="M20,33.29l-4.69.6a.23.23,0,0,1-.24-.32l3.46-7.95a2.33,2.33,0,0,1,1.67-1.35l5.82-1.22" />

                    <path d="M21.49,36.68c-6.55,2.1-6.88,12.47-6.88,12.47s10.08.11,12.59-6.76" />

                    <line
                      x1="10.88"
                      y1="52.82"
                      x2="7.12"
                      y2="56.59"
                      stroke-linecap="round"
                    />

                    <line
                      x1="10.6"
                      y1="45.63"
                      x2="7.41"
                      y2="48.81"
                      stroke-linecap="round"
                    />

                    <line
                      x1="17.94"
                      y1="53.11"
                      x2="14.76"
                      y2="56.3"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Fast Performance</h1>
                <p className="p service__text p__color">
                  I specialize in optimizing websites for speed and performance
                  by identifying and addressing potential bottlenecks,
                  implementing code splitting, and utilizing other performance
                  optimization techniques.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17,6 L17,4.5 C17,3.67157288 16.3284271,3 15.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6 L17,6 L17,6 Z M13.4998169,7 L3,7 L3,16.5 C3,17.3284271 3.67157288,18 4.5,18 L13,18 L13,8.5 C13,7.93719704 13.1859724,7.41783027 13.4998169,7 L13.4998169,7 Z M15.5,7 C14.6715729,7 14,7.67157288 14,8.5 L14,19.5 C14,20.3284271 14.6715729,21 15.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,8.5 C21,7.67157288 20.3284271,7 19.5,7 L15.5,7 L15.5,7 Z M18,6 L19.5,6 C20.8807119,6 22,7.11928813 22,8.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L15.5,22 C14.1192881,22 13,20.8807119 13,19.5 L13,19 L4.5,19 C3.11928813,19 2,17.8807119 2,16.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L15.5,2 C16.8807119,2 18,3.11928813 18,4.5 L18,6 Z M4,4 L5,4 L5,5 L4,5 L4,4 Z M6,4 L7,4 L7,5 L6,5 L6,4 Z M8,4 L9,4 L9,5 L8,5 L8,4 Z M16.5,20 C16.2238576,20 16,19.7761424 16,19.5 C16,19.2238576 16.2238576,19 16.5,19 L18.5,19 C18.7761424,19 19,19.2238576 19,19.5 C19,19.7761424 18.7761424,20 18.5,20 L16.5,20 Z" />
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Perfect Responsive</h1>
                <p className="p service__text p__color">
                  We specialize in creating visually appealing and user-friendly
                  websites that adapt to different screen sizes and devices. Our
                  designs are optimized for performance and deliver a seamless
                  user experience across all platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  fill="none"
                  width="1em"
                  height="em"
                  viewBox="0 0 32 32"
                  version="1.1"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>react</title>
                  <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">React Web Application </h1>
                <p className="p service__text p__color">
                  I specialize in creating dynamic and responsive web
                  applications using React.js, a popular JavaScript library for
                  building user interfaces. I can create Single-Page
                  Applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

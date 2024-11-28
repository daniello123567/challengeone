'use client'
import React from 'react'
function Hero() {
  const Logo1 = () => {
    return (<svg className='w-[2.5em] h-[2.5em]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#f5f5f5"> <path d="M156.633 104.602c-.039-3.504-.859-6.964-2.137-10.214-.986-2.516-2.131-4.966-3.249-7.425a1407.959 1407.959 0 0 0-28.003-57.54c-1.374-2.65-2.719-5.316-4.17-7.925-1.426-2.545-3.086-4.995-5.235-6.987-3.429-3.269-8.03-5.218-12.752-5.512h-2.174c-4.861.24-9.606 2.28-13.094 5.68-2.07 1.961-3.672 4.352-5.06 6.826-1.432 2.566-2.758 5.19-4.106 7.798a1418.216 1418.216 0 0 0-19.084 38.464c-3.676 7.73-7.321 15.473-10.827 23.279-1.454 3.252-2.769 6.615-3.264 10.165-.917 5.994.398 12.285 3.6 17.432 2.76 4.471 6.903 8.074 11.732 10.155a26.434 26.434 0 0 0 11.983 2.121c5.483-.291 10.77-2.261 15.409-5.136 5.175-3.176 9.601-7.4 13.722-11.822 3.832 4.13 7.933 8.071 12.667 11.16 4.572 3.008 9.785 5.186 15.268 5.704 5.955.622 12.125-.854 17.123-4.169a26.096 26.096 0 0 0 9.814-12.059 25.814 25.814 0 0 0 1.837-9.995zm-56.684-2.312c-1.495-1.76-2.812-3.664-4.135-5.554-2.226-3.265-4.25-6.678-5.878-10.284-1.334-2.992-2.405-6.133-2.823-9.395-.305-2.588-.232-5.288.718-7.745.85-2.304 2.484-4.3 4.554-5.619 4.932-3.183 11.962-2.839 16.431 1.022 2.262 1.927 3.613 4.776 3.953 7.704.445 3.892-.44 7.801-1.799 11.431-2.566 6.736-6.628 12.774-11.021 18.44zm48.393 8.255c-1.318 4.549-4.486 8.523-8.631 10.816-3.674 2.055-8.059 2.759-12.201 2.067-5.275-.821-10.008-3.62-14.109-6.924-3.014-2.422-5.728-5.19-8.328-8.043 4.105-5.192 7.972-10.624 10.926-16.562 2.578-5.2 4.537-10.834 4.723-16.681.105-3.71-.593-7.488-2.326-10.791-2.269-4.413-6.334-7.803-10.994-9.443-4.353-1.555-9.192-1.694-13.633-.428-4.188 1.185-8.013 3.702-10.634 7.191-2.307 3.042-3.622 6.782-3.927 10.575-.469 5.463.9 10.913 2.971 15.935 3.079 7.338 7.598 13.98 12.589 20.141a68.79 68.79 0 0 1-7.306 7.26c-4.052 3.429-8.688 6.414-13.94 7.55-4.246.953-8.827.479-12.721-1.491-4.561-2.273-8.063-6.554-9.384-11.475-1.01-3.615-.786-7.518.415-11.059.999-2.93 2.354-5.722 3.622-8.541a1408.352 1408.352 0 0 1 27.689-56.927c1.44-2.793 2.858-5.599 4.382-8.346 1.244-2.213 2.691-4.386 4.736-5.94a12.244 12.244 0 0 1 7.749-2.583c2.88-.034 5.743 1.027 7.946 2.878 2.176 1.807 3.646 4.279 4.966 6.743 2.984 5.605 5.85 11.275 8.717 16.939a1379.995 1379.995 0 0 1 23.582 49.054c1.139 2.564 2.358 5.108 3.125 7.814.937 3.337.968 6.941-.004 10.271zM57.249 146.038c2.464-.558 5.156 1.067 5.796 3.513.795 2.503-.785 5.413-3.301 6.137-2.458.864-5.377-.638-6.191-3.092-.772-2.068.054-4.564 1.888-5.787a5.09 5.09 0 0 1 1.808-.771zM73.891 162.195c1.484-1.613 3.575-2.624 5.729-2.946a13.452 13.452 0 0 1 4.295.272c-.018 2.271-.004 4.539-.008 6.811-2.209-.571-4.601-.689-6.769.109a8.062 8.062 0 0 0-3.1 2.037c-.186.159-.141.416-.158.637.013 6.345-.01 12.691.009 19.035-.022.244.037.519-.071.748-2.45.057-4.903.011-7.354.02.001-9.673-.008-19.348.006-29.021 2.064.009 4.129-.008 6.194.004.454-.026.938.207 1.104.65.163.53.111 1.095.123 1.644zM126.719 162.221c1.961-2.029 4.803-3.027 7.592-3.033 2.947-.074 5.967.797 8.244 2.709a8.97 8.97 0 0 1 3.115 4.687c.648 2.261.59 4.636.582 6.965.002 5.124 0 10.249.002 15.374-2.471-.004-4.941.016-7.412-.011.002-5.121 0-10.242.002-15.365 0-1.903.09-3.956-.922-5.651-.705-1.216-2.1-1.822-3.445-1.963-2.562-.41-5.238.609-7.004 2.477-.188.188-.349.426-.328.71-.024.792.096 1.587.028 2.38-.097 1.077.054 2.154.019 3.234a214.498 214.498 0 0 0-.008 6.109c-.14 2.693.104 5.395-.057 8.085-2.461-.008-4.92-.002-7.381-.003-.001-9.678-.018-19.354.009-29.031 1.903.015 3.81 0 5.712.006.492-.031 1.03.244 1.157.744.116.514.081 1.049.095 1.577zM54.539 188.924c-.001-9.677-.015-19.353.005-29.029 2.452.006 4.903.004 7.354.002.019 9.676.005 19.352.007 29.026-2.455 0-4.91-.002-7.366.001zM49.972 159.898c-1.943-.004-3.886.006-5.831-.011-.514-.003-1.17.022-1.421.562-.225.555-.139 1.171-.159 1.755-1.617-1.721-3.896-2.743-6.234-2.965-3.61-.324-7.351.677-10.25 2.869-2.388 1.764-4.153 4.315-5.077 7.125-.445 1.317-.668 2.699-.81 4.08v1.987c.207 4.159 2.057 8.273 5.284 10.954 2.434 2.062 5.562 3.214 8.731 3.415h1.652c2.512-.169 4.992-1.208 6.706-3.08.016.587-.067 1.209.153 1.771.229.455.769.58 1.238.562 2.005-.005 4.013.002 6.02-.009 0-9.669.006-19.342-.002-29.015zm-7.638 19.983c-1.5 1.796-3.843 2.858-6.183 2.784-2.508.019-5.111-.942-6.736-2.909-1.585-1.878-2.064-4.49-1.704-6.877.269-1.932 1.254-3.785 2.81-4.984 1.411-1.114 3.19-1.688 4.971-1.812 2.653-.232 5.45.938 7.046 3.08.09 3.154.002 6.316.042 9.475-.026.416.089.917-.246 1.243zM115.51 168.201c-1.142-2.793-3.168-5.221-5.736-6.805-2.645-1.646-5.817-2.39-8.918-2.179-2.449.161-4.842 1.206-6.542 2.992-.01-5.421 0-10.839-.005-16.26-2.472.001-4.946-.011-7.418.007.013 14.318-.021 28.643.018 42.96 2.047.005 4.096.01 6.144.005.509.04 1.058-.24 1.198-.755.101-.524.064-1.065.067-1.596 1.718 1.911 4.242 2.948 6.78 3.101h1.514c4.109-.206 8.138-2.132 10.717-5.361 3.612-4.429 4.317-10.867 2.181-16.109zm-8.645 12.214c-1.656 1.537-3.948 2.274-6.186 2.252-2.335.054-4.668-1.019-6.147-2.826-.183-.188-.243-.442-.228-.692.002-3.322.005-6.643 0-9.963 1.42-1.852 3.693-3.006 6.018-3.125 2.357-.069 4.83.623 6.56 2.285 1.648 1.529 2.452 3.822 2.4 6.043.048 2.218-.778 4.496-2.417 6.026zM176.503 164.609c-3.144-4.004-8.519-6.024-13.53-5.275-2.093.33-4.076 1.334-5.539 2.874-.016-5.418 0-10.836-.008-16.256-2.468-.003-4.934-.005-7.4.002-.002 14.319 0 28.642 0 42.963 1.945.015 3.895-.003 5.84.015.511.008 1.15-.033 1.412-.555.227-.564.142-1.193.158-1.786 1.705 1.868 4.174 2.9 6.672 3.082h1.666c4.064-.221 8.037-2.118 10.611-5.298 2.102-2.536 3.236-5.784 3.424-9.055v-1.941c-.233-3.158-1.299-6.294-3.306-8.77zm-5.776 14.972c-1.957 2.519-5.41 3.456-8.473 2.967-1.865-.372-3.674-1.379-4.777-2.951-.123-1.219-.012-2.452-.049-3.677.026-2.253-.056-4.513.037-6.762 1.122-1.547 2.918-2.539 4.766-2.949 3.42-.632 7.396.723 9.125 3.881 1.574 2.923 1.417 6.829-.629 9.491z"></path> </g> </g></svg>)
  }
  const Logo2 = () => {
    return (
      <svg className='w-[2.5em] h-[2.5em]' fill="#f5f5f5" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg" stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path></g></svg>)
  }
  const Logo3 = () => {
    return (
      <svg className='w-[2.5em] h-[2.5em]' fill="#f5f5f5" viewBox="0 -29.98 240 240" xmlns="http://www.w3.org/2000/svg" stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M238.553 22.362s-6.882-5.327-29.168-13.512C189.83 1.653 174.893 0 174.893 0l.074 42.679c0 18.039-20.385 37.194-55.199 37.194h-.996c-34.81 0-55.188-19.155-55.188-37.194L63.652 0S48.729 1.652 29.166 8.85C6.881 17.035 0 22.362 0 22.362c1.652 34.229 54.826 62.43 119.263 62.445h.015c64.441-.015 117.628-28.216 119.275-62.445"></path><path d="M238.582 118.203s-6.881 5.312-29.167 13.504c-19.569 7.198-34.493 8.843-34.493 8.843l.075-42.672c0-18.035-20.386-37.183-55.199-37.183l-.49-.015h-.015l-.483.015c-34.817 0-55.195 19.148-55.195 37.183l.076 42.672s-14.931-1.645-34.493-8.843C6.919 123.515.024 118.203.024 118.203c1.652-34.226 54.84-62.427 119.285-62.449 64.44.022 117.629 28.223 119.273 62.449M11.611 179.946c-5.432 0-5.53-4.135-5.53-5.733v-7.528c0-.469-.03-1.072.936-1.072h2.799c.92 0 .868.635.868 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.708c1.939 0 2.052-1.435 2.052-1.978v-7.528c0-.438-.062-1.072.853-1.072H23.2c1.02 0 .928.635.928 1.072v7.528c0 1.601-.106 5.733-5.545 5.733M37.632 179.026c-1.916-2.58-4.655-5.824-7.446-9.266v9.174c0 .407.098 1.012-.86 1.012h-2.618c-.943 0-.837-.604-.837-1.012v-12.268c0-.422-.038-1.057.837-1.057h5.107c1.441 0 3.501 2.897 4.844 4.828 1.049 1.449 2.965 3.651 4.255 5.312v-9.084c0-.422-.053-1.057.898-1.057h2.844c.905 0 .854.635.854 1.057v13.277h-5.243c-1.126.004-1.609.08-2.635-.916M47.244 179.946v-14.319h12.652c.77 0 5.968-.104 5.968 5.356 0 5.568.596 8.963-5.862 8.963h-6.82l-1.471-2.987v2.987m7.513-3.772c2.301 0 2.127-2.202 2.127-3.214 0-3.38-.951-3.518-2.467-3.518h-7.22v6.73l7.56.002zM70.813 165.718h11.664c.981 0 .853.646.853 1.84 0 1.116.151 1.75-.853 1.75h-9.219c-.242 0-1.086-.119-1.086.74 0 .875-.159 1.223.762 1.223h8.148l1.313 2.609c.188.362.166.68-.551.68h-8.436l-1.305-2.551v3.758c0 .875.777.709 1.003.709h9.574c.951 0 .868.664.868 1.75 0 1.162.083 1.812-.868 1.812H70.563c-1.011 0-2.98-.315-2.98-3.472v-7.891c0-.83.43-2.957 3.23-2.957M86.475 165.626h12.758c1.712 0 4.202-.016 4.202 4.604 0 3.018-.641 3.168-2.015 4.104 2.301.393 1.992 3.334 1.992 4.857 0 .771-.279.754-.506.754h-3.742c-.785 0-.596-1.236-.596-1.885 0-1.75-.981-1.676-1.366-1.676h-5.507c-.528-.921-1.554-2.973-1.554-2.973v5.945l-.702.588h-3.765l-.377-.469v-12.613c.001-.888.627-1.236 1.178-1.236m10.162 3.788h-5.681c-.951 0-.905.315-.905.604v2.563h5.847c2.837 0 2.837-.709 2.837-1.448-.001-1.478-.121-1.719-2.098-1.719M125.404 165.718c.936 0 1.848.422 2.832 2.338.664 1.373 5.297 9.748 6.277 11.498v.482h-4.828l-1.39-2.52h-5.872l-1.27-2.883c-.361.588-2.3 4.27-2.964 5.401h-4.843v-.315c.988-1.857 7.733-14.004 7.733-14.004m2.817 3.972l-2.369 4.299.219.213h4.391l.219-.213-2.24-4.314-.22.015M137.576 165.626h12.766c1.705 0 4.195-.016 4.195 4.604 0 3.018-.635 3.168-2.008 4.104 2.311.393 1.992 3.334 1.992 4.857 0 .771-.287.754-.514.754h-3.742c-.783 0-.588-1.236-.588-1.885 0-1.75-.98-1.676-1.357-1.676h-5.521c-.529-.921-1.557-2.973-1.557-2.973v5.945l-.691.588h-3.773l-.377-.469v-12.613c-.001-.888.632-1.236 1.175-1.236m10.171 3.788h-5.688c-.951 0-.904.315-.904.604v2.563h5.854c2.821 0 2.821-.709 2.821-1.448-.001-1.478-.105-1.719-2.083-1.719M165.688 179.946c-.949-1.78-3.59-6.699-5.371-9.928v8.933c0 .377.061.995-.859.995h-2.58c-.966 0-.891-.618-.891-.995v-12.269c0-.438-.061-1.057.891-1.057h4.467c.664 0 1.613-.15 2.67 1.977.801 1.705 2.489 5.252 3.668 7.123 1.176-1.871 2.912-5.418 3.711-7.123 1.041-2.127 1.961-1.977 2.717-1.977h4.451c.904 0 .799.619.799 1.057v12.269c0 .377.137.995-.799.995h-2.611c-.95 0-.875-.618-.875-.995v-8.933c-1.811 3.229-4.422 8.146-5.416 9.928M185.092 179.976c-4.225 0-4.043-4.525-4.043-7.482 0-2.688-.303-6.896 4.993-6.941h9.416c5.312 0 4.964 4.271 4.964 6.941 0 2.957.213 7.482-4.089 7.482m-2.731-3.682c2.144 0 2.067-2.218 2.067-3.695 0-1.344.317-3.427-2.476-3.427h-4.736c-2.775 0-2.445 2.083-2.445 3.427 0 1.479-.136 3.695 2.008 3.695h5.582zM207.499 179.946c-5.417 0-5.522-4.135-5.522-5.733v-7.528c0-.469-.029-1.072.937-1.072h2.808c.92 0 .858.635.858 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.707c1.947 0 2.053-1.435 2.053-1.978v-7.528c0-.438-.045-1.072.859-1.072h2.821c1.026 0 .937.635.937 1.072v7.528c0 1.601-.092 5.733-5.553 5.733M223.04 165.626h12.767c1.705 0 4.193-.016 4.193 4.604 0 3.018-.648 3.168-2.021 4.104 2.31.393 2.008 3.334 2.008 4.857 0 .771-.287.754-.514.754h-3.742c-.77 0-.588-1.236-.588-1.885 0-1.75-.996-1.676-1.373-1.676h-5.508c-.527-.921-1.555-2.973-1.555-2.973v5.945l-.709.588h-3.758l-.377-.469v-12.613c0-.888.634-1.236 1.177-1.236m10.155 3.788h-5.674c-.951 0-.906.315-.906.604v2.563h5.855c2.821 0 2.821-.709 2.821-1.448.002-1.478-.119-1.719-2.096-1.719"></path></g></svg>
    )
  }
  const Logo5 = () => {
    return (
<svg width="101px" height="101px" viewBox="74.428 -2051.565 9772.44 9772.44" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f5f5f5" d="M1539.928 1369.145c-809.356 0-1465.5 656.126-1465.5 1465.482 0 809.443 656.144 1465.535 1465.5 1465.535 809.392 0 1465.5-656.091 1465.5-1465.535 0-809.304-656.074-1465.412-1465.518-1465.412l.018-.07zm672.069 2113.646c-26.32 43.173-82.565 56.7-125.598 30.397-344.137-210.332-777.297-257.845-1287.421-141.312-49.157 11.271-98.157-19.547-109.356-68.688-11.253-49.157 19.424-98.157 68.704-109.356 558.249-127.628 1037.101-72.695 1423.378 163.344 43.05 26.426 56.699 82.601 30.275 125.65l.018-.035zm179.374-398.981c-33.145 53.777-103.46 70.647-157.167 37.624-393.837-242.094-994.384-312.217-1460.32-170.781-60.428 18.252-124.25-15.803-142.59-76.125-18.2-60.428 15.873-124.128 76.195-142.503 532.227-161.489 1193.865-83.265 1646.239 194.723 53.726 33.075 70.7 103.425 37.625 157.079l.018-.017zm15.4-415.52c-472.395-280.542-1251.599-306.337-1702.556-169.47-72.414 21.962-148.994-18.918-170.939-91.333-21.945-72.449 18.9-148.977 91.367-170.992 517.667-157.149 1378.229-126.787 1922.022 196.035 65.135 38.657 86.503 122.779 47.897 187.827-38.5 65.135-122.85 86.607-187.774 47.933h-.017zM4061.569 2722.05c-253.033-60.34-298.078-102.689-298.078-191.678 0-84.069 79.152-140.646 196.857-140.646 114.1 0 227.237 42.962 345.852 131.407 3.588 2.678 8.086 3.744 12.513 3.045 4.428-.665 8.348-3.098 10.938-6.755l123.55-174.16c5.075-7.175 3.692-17.062-3.15-22.54-141.172-113.277-300.142-168.35-485.956-168.35-273.21 0-464.047 163.957-464.047 398.545 0 251.562 164.622 340.637 449.102 409.394 242.13 55.772 282.993 102.498 282.993 186.025 0 92.557-82.636 150.097-215.618 150.097-147.699 0-268.169-49.752-402.937-166.46-3.342-2.888-7.928-4.199-12.162-3.954-4.463.367-8.541 2.432-11.375 5.845l-138.53 164.867c-5.81 6.842-5.075 17.062 1.646 22.978 156.799 139.982 349.648 213.92 557.759 213.92 294.401 0 484.644-160.86 484.644-409.832.525-210.175-125.299-326.55-433.474-401.52l-.527-.228zM5161.617 2472.5c-127.609 0-232.277 50.26-318.587 153.247v-115.92c0-9.152-7.42-16.607-16.555-16.607h-226.572c-9.152 0-16.555 7.455-16.555 16.607V3797.86c0 9.152 7.402 16.607 16.555 16.607h226.572c9.135 0 16.555-7.454 16.555-16.607v-406.577c86.328 96.88 191.013 144.218 318.587 144.218 237.107 0 477.138-182.524 477.138-531.439.35-349.002-239.75-531.579-476.875-531.579l-.263.017zm213.675 531.562c0 177.678-109.445 301.665-266.158 301.665-154.926 0-271.791-129.623-271.791-301.665 0-172.024 116.865-301.664 271.791-301.664 154.176-.018 266.176 126.822 266.176 301.646l-.018.018zM6253.966 2472.5c-305.357 0-544.582 235.13-544.582 535.359 0 296.957 237.58 529.619 540.837 529.619 306.442 0 546.401-234.342 546.401-533.417 0-298.042-238.35-531.526-542.674-531.526l.018-.035zm0 834.994c-162.418 0-284.865-130.498-284.865-303.52 0-173.758 118.213-299.845 281.119-299.845 163.468 0 286.737 130.497 286.737 303.642 0 173.723-118.999 299.723-282.975 299.723h-.016zM7448.688 2493.221h-249.322v-254.905c0-9.135-7.385-16.59-16.537-16.59h-226.537c-9.17 0-16.607 7.455-16.607 16.59v254.905h-108.938c-9.117 0-16.503 7.454-16.503 16.607v194.722c0 9.135 7.386 16.607 16.503 16.607h108.938v503.842c0 203.612 101.342 306.845 301.209 306.845 81.271 0 148.697-16.783 212.24-52.815 5.162-2.888 8.364-8.452 8.364-14.367v-185.43c0-5.723-2.976-11.13-7.875-14.122-4.935-3.098-11.077-3.255-16.135-.753-43.646 21.963-85.837 32.095-133 32.095-72.694 0-105.122-33.005-105.122-106.977v-468.229h249.322c9.152 0 16.52-7.455 16.52-16.607v-194.705c.35-9.152-7-16.607-16.274-16.607l-.246-.106zM8317.388 2494.218v-31.308c0-92.103 35.314-133.175 114.52-133.175 47.232 0 85.173 9.38 127.662 23.555 5.233 1.646 10.692.823 14.945-2.31 4.375-3.133 6.843-8.155 6.843-13.475V2146.58c0-7.298-4.69-13.755-11.726-15.908-44.888-13.353-102.322-27.055-188.316-27.055-209.266 0-319.883 117.845-319.883 340.672v47.95h-108.85c-9.135 0-16.625 7.455-16.625 16.59v195.72c0 9.135 7.49 16.607 16.625 16.607h108.85v777.156c0 9.152 7.385 16.607 16.521 16.607h226.572c9.152 0 16.607-7.455 16.607-16.607V2721.21h211.54l324.047 776.964c-36.785 81.637-72.959 97.877-122.342 97.877-39.918 0-81.953-11.918-124.934-35.438-4.042-2.223-8.837-2.59-13.194-1.242-4.323 1.522-7.962 4.742-9.8 8.942l-76.79 168.472c-3.658 7.963-.525 17.309 7.14 21.438 80.167 43.417 152.531 61.949 241.973 61.949 167.299 0 259.77-77.927 341.285-287.577l393.066-1015.698c1.977-5.11 1.383-10.885-1.75-15.417-3.113-4.498-8.137-7.21-13.633-7.21h-235.865c-7.068 0-13.389 4.497-15.697 11.13l-241.621 690.164-264.652-690.619c-2.414-6.423-8.609-10.676-15.469-10.676h-387.101l.052-.051zM7813.738 2493.221h-226.572c-9.153 0-16.607 7.454-16.607 16.607v988.485c0 9.152 7.454 16.607 16.607 16.607h226.572c9.135 0 16.607-7.455 16.607-16.607v-988.416a16.57 16.57 0 0 0-16.626-16.607l.019-.069zM7701.738 2043.139c-89.757 0-162.592 72.659-162.592 162.417 0 89.81 72.853 162.558 162.593 162.558 89.723 0 162.486-72.748 162.486-162.558 0-89.74-72.799-162.417-162.398-162.417h-.089zM9686.585 2811.037c-89.67 0-159.441-72.013-159.441-159.46s70.682-160.282 160.281-160.282c89.672 0 159.443 71.995 159.443 159.372 0 87.448-70.701 160.37-160.299 160.37h.016zm.875-303.887c-81.672 0-143.465 64.925-143.465 144.427 0 79.468 61.355 143.518 142.643 143.518 81.654 0 143.518-64.872 143.518-144.428 0-79.467-61.426-143.517-142.625-143.517h-.071zm35.352 159.914l45.098 63.141h-38.027l-40.602-57.925h-34.91v57.925h-31.832v-167.37h74.637c38.885 0 64.453 19.897 64.453 53.393.174 27.44-15.75 44.205-38.676 50.837h-.141zm-26.95-75.511h-41.512v52.938h41.512c20.719 0 33.09-10.133 33.09-26.495 0-17.22-12.424-26.442-33.074-26.442h-.016z"></path></g></svg>
 )
  }

  const Logo6 = () => {
    return (
<svg width="101px" height="101px" viewBox="25.278 -262.137 1248.358 1248.358" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M208.6 135.5c3 1.4 4.9 4.3 7.3 6.6 3.9 3.4 6.801 7.9 10.601 11.4 4.7 4.5 7.7 10.2 11.6 15.3 6.8 10.3 12.8 21.3 15.9 33.3 3.2 8.2 3.7 17.1 3.5 25.9.2 8-2 15.9-5.601 23.1-6.199 10.9-17.399 18.2-29.1 22.1-14.6 3.5-30.7 4.1-44.8-2.1-5.101-2.8-10.9-4.7-15-9.1-9.5-7.8-15-20.5-13.2-32.8 2.8-21.9 15.9-40.7 29.9-56.9 1.3 2.4.199 5.2 1.1 7.7 1.2 5.3 3.1 10.9 7.1 14.7 4.9-4.5 10.101-9 14.301-14.2 3.8-5.6 6.899-11.8 8.199-18.4.301-8.4 1.101-17.2-2.1-25.2l.3-1.4zM25.4 235.4c23.4.2 46.9-.2 70.301.2 0 23.3.199 46.6-.101 69.9 16.601.3 33.2.1 49.9.1.2 1.8.3 3.6.3 5.4-.2 19.2.1 38.3-.2 57.5-16.7.2-33.3 0-50 .1.3 34.5-.1 68.9.2 103.4.6 3 1 6 .9 9.1-.301 2.801 1.399 5.101 2 7.7 1.3 6 4.6 11.4 8.399 16.101 5.601 5.6 12.8 9.5 20.5 11.199 7 1.101 14 1.7 21.101 1.2.399 1.2.6 2.4.6 3.7-.1 18-.1 36 0 53.9 0 2.5-.5 5-.9 7.399-10.1 0-20.199.7-30.3 0-6-1.3-12.399-.7-18.2-3.3-16.1-3.8-31.5-11.8-43-23.9C40 538.8 30.9 515.8 27.2 493c-1-2.5-.4-5.4-.801-8.1-1.399-5.5-.8-11.301-1-16.9-.099-77.5-.099-155.1.001-232.6zM367 300.2c4.199-1.1 8.699-.3 12.899-1.2 8.8-1.1 17.5.3 26.2.6 6.1-.1 12 1.7 18 2.9 22.3 5.4 43.4 17.3 58.7 34.7 2.7 4.5 6.8 7.8 9.399 12.4 6.5 10.3 10.801 21.8 14.5 33.4 2.301 8.5 3.5 17.3 4.601 26 .5 19.3.2 38.7.3 58-.1 38.5.1 77-.1 115.5-23.4-.3-46.7-.1-70-.2-.2-.1-.7-.5-.9-.7-.1-53.899 0-107.8 0-161.6.1-6.6-1.1-13-2.5-19.3-2.5-6.4-5.7-12.5-10.1-17.7-2.601-3.1-6.2-5.1-9.101-7.8-4.5-3-9.8-4.4-14.899-5.8-2.7-.2-5.4 0-7.9-.9-10.7-.7-21.6.2-31.6 4.3-7.301 3.5-14.101 8.3-18.9 15-7.9 9.4-10.5 22.2-10.3 34.2 0 53.4.1 106.9 0 160.3-23.601.2-47.2-.1-70.8.2-.4-51.5 0-103.1-.2-154.6.1-6.601-.1-13.2.4-19.801 1.3-3.3.399-6.899 1.399-10.1 1.8-12.2 6.4-23.8 11.5-34.9 5-9.7 11-19 18.8-26.7 6.101-6.2 12.4-12.7 20.101-17C331.4 309 349 302.7 367 300.2zM1205 299.6c8.699-.2 17.3-1.9 26-.5 4.699.6 9.5.5 14.199.7.9 8.7.2 17.5.4 26.2v35c0 2.2.3 4.5-.6 6.6-2.301-1.699-5.4-1.1-8-1.8-10.601-.899-21.5-.399-31.5 3.601-11.9 4.1-22.301 12.8-28.101 24.1-1.7 2.1-1.7 5.1-3.6 7.1-3.101 11.2-3.3 22.9-3.101 34.4-.1 49.2.301 98.3-.199 147.5-23.301-.3-46.7 0-70.101-.2-.2-.2-.5-.6-.7-.8v-160.5c-.3-6.7 1.2-13.2 1.101-19.8 1.6-3.2 1.2-6.9 2.2-10.2 5-25.3 18.3-49.2 38.5-65.5 3.899-4.4 9.5-6.5 14.1-10C1170.5 306.4 1187.8 302 1205 299.6zM168.5 305.5c23.6.4 47.2-.1 70.8.2 0 91.5-.1 182.899 0 274.3 0 .9 0 2.7-1.4 2.4h-69.199c-.601-15.1-.101-30.3-.301-45.4.1-77.1 0-154.3.1-231.5zM909 491.1c6-2.3 11.8-5.3 17.899-7.399 8.8-3.4 17.4-7.5 26.2-10.9 18.2-8.399 37-15.399 55.4-23.3 4.399-2.4 9.399-3.5 13.699-6.1 4.9-1.9 9.801-3.601 14.601-5.801 4.2-2.5 9-3.5 13.3-5.699 5.7-2.301 11.2-4.9 17-7 5.9-3.301 12.5-4.9 18.4-8.101 1.6-1.1 4.199-.8 5.199-2.7-1.699-2.399-.8-5.399-1.699-8-1.301-4.699-2.601-9.3-3.7-13.899-4.5-13.9-11-27.2-19.8-38.8-10.7-15.5-25.4-28-41.7-37.2-10.7-6.5-22.7-10.2-34.7-13.4-7.4-.9-14.5-3.5-22-3.4-6.8-.9-13.8-1.3-20.5-.1-11.9.2-23.3 3.1-34.6 6.4-19.7 6.9-38.4 17.4-53.5 31.9-4.5 4.2-8.2 9.1-12.5 13.4-6.7 8.6-12.801 17.7-17.4 27.5-6.5 14.7-12.7 30.1-13.4 46.4-2.199 7.8-1.5 16-1.6 24-.2 5.1.6 10.1 1.6 15-.3 5.199 1.7 10 2.4 15 1.7 10.6 6.4 20.399 10.7 30.199 11.8 24.2 30.399 45.2 53.7 58.9 15.3 9.4 32.3 16.1 50.1 18.6 14.5 2.301 29.4 2.7 44 .801 5 .399 9.8-1.801 14.8-2.101 21.3-5 42.2-14 58.3-29.1 4.801-3.8 9.301-8.3 13.101-13.101 6.399-6.5 11-14.399 15.6-22.199 4.4-8.301 8-17.101 10.601-26.2-1.4-.601-3-.4-4.4-.4-23.4.101-46.7-.1-70.1 0-2.2 0-2.2 3-3.601 4.2-4 5.8-9.1 10.7-14.5 15.3-7.8 5.601-17 8.601-26.1 11.3-2.4.301-4.7.2-6.9 1.101-5.6.399-11.3.2-17 .1-6.3-1.2-12.6-2.6-18.7-4.6-9.399-4.8-18.6-10.3-25.699-18.101-1.801-2.199-4.7-3.899-5.301-6.8 1.601-.7 3.101-1.8 4.9-2.1 2.9-.5 5.099-2.8 7.9-3.6zm-28.801-50.6c-1.399-3.5-.1-7.6-.3-11.3 1.601-5.101 2.101-10.5 4-15.601 4.8-11.3 10.7-22.399 19.3-31.3 4-3.3 7.4-7.3 12-9.8 3.4-1.8 6.7-3.8 10.2-5.4 6.5-1.899 12.8-4.899 19.601-4.899 6.199-1.5 12.6-.7 18.899-.601 16.5 2.301 33.101 9.4 43.8 22.5 1.101 2.601-2.6 2.801-4.1 3.801-6.5 3.6-13.8 5.399-20.3 9.1-2.9.5-5.4 2.3-8.2 3.2-20.7 9-41.8 16.899-62.3 26.3-10.999 4.3-21.899 8.9-32.6 14zM805.699 183.3c-21.899-.2-43.8 0-65.699-.1-1.601.2-3.5-.5-4.801.7.2 47 0 94.1.101 141.1-.101 1.7.3 3.4-.4 5-2-.3-3-2.2-4.5-3.3-10.1-8.7-21.399-16.1-34-20.4-8.5-3.3-17.399-5-26.399-6.6-10.2-.2-20.5-.5-30.801.1-1.1.3-2.1.6-3.199.7-22.9 3.2-44.301 13.9-61.9 28.6-9.8 9.2-19.6 18.8-26.5 30.4-8.1 11.5-13.3 24.7-18.3 37.7-2.3 8.2-4.601 16.3-5.601 24.7-1.9 12.9-1.1 26.1-.9 39.1.5 3.4 1.6 6.6 1.7 10 1.8 11 5 21.8 9.399 32.1 3.7 9.9 9.7 18.9 15.2 27.9 3.9 5 7.7 10.2 12.4 14.6 7 6.9 13.899 14.4 22.699 19.2 10.4 7.9 22.7 12.601 34.7 17.2 4.4.8 8.5 3.3 13 3.4 3.8.3 7.3 2.1 11.101 1.899 2-.2 3.8 1.2 5.899 1 9.7.3 19.5.3 29.2 0 1.6 0 3.2-.7 4.9-.8 6.699.1 12.899-2.5 19.399-3.4 8.5-3.1 17.601-5.1 25.5-9.699 11.7-5.4 22.3-13 31.8-21.601 12-10.399 21.7-23.399 28.9-37.6 3.1-6.3 6.6-12.4 8.6-19.2 3.801-9.4 5.5-19.4 6.801-29.3 2.199-8.7 1.5-17.8 1.699-26.8.002-85.499.002-170.999.002-256.599zM734.6 454.1c-.6 10.601-4.6 20.7-9.3 30.2-7.9 14.9-21.2 26.3-36.3 33.5-2.301 1.2-5.301 1.101-6.9 3.3-2.8 0-5.6.101-8.3 1.101-8.601.2-17.5 1-25.9-1.4-3.6-1.7-7.6-2.399-11.2-4.3-4.5-2.5-9.6-4.2-13.3-8-7-4.9-12.399-11.6-17.3-18.5-3.9-6.7-7.8-13.6-9.6-21.2-2-4-1.801-8.5-2.9-12.7-.3-10.699-.9-21.699 1.6-32.1 1.101-3.3 1.801-6.8 3-10.1 2.9-5.301 4.7-11.2 8.5-16 2-4.2 5.5-7.301 8.301-10.9 7.5-8.6 17.8-14.1 28.199-18.4 3.9-.899 7.7-2.899 11.801-2.899 8.3-2.101 16.899-.4 25.1 1.1 10.8 3.9 21.5 9.3 29.9 17.3 3.1 2.9 5.399 6.5 8.5 9.4C731.3 410.7 737.199 432.8 734.6 454.1zM1204.4 547.3h26.2c.1 2 .1 4 0 6-3 .4-6-.1-8.9.3-.399 9 0 17.9-.199 26.9-2.7-.2-5.4-.2-8-.1-.301-7.101-.2-14.301-.101-21.4 0-1.9.4-4.1-1.3-5.4-2.6-.399-5.2.101-7.8-.3-.101-2-.101-4 .1-6zM1235.4 547.4c3.7-.101 7.4-.301 11.101.199-.2 2.9 2.199 4.9 2.899 7.601 1 3.399 2.5 6.6 3.5 10 .8 1.5 2.2 2.8 1.7 4.7 2-7.801 5.1-15.2 8.2-22.5 3.5-.101 7.1-.2 10.7 0 .199 10.699 0 21.6 0 32.3-2.4.2-4.801.2-7.301 0 .101-7.5 0-15 .2-22.4-.899.8-1.8 1.5-2.5 2.5-1.3 6.8-4.8 13-6.5 19.8-2 .301-3.899.301-5.899.101-.601-3.8-3.301-6.9-3.301-10.8-2.699-3.301-2.8-8-4.899-11.7-1.4 2.7-.3 5.899-.601 8.8-.399 4.7.5 9.5-.399 14.2-2.4 0-5.101.8-7-.9.3-10.601 0-21.201.1-31.901z" fill="#f5f5f5" stroke="#f5f5f5" stroke-width=".094"></path></g></svg> )
  }
  const Logo4 = () => {
    return (
<svg className='w-[2.5em] h-[2.5em]' fill="#f5f5f5" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 47 47"  stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M45.707,0.248c-0.217-0.19-0.504-0.277-0.792-0.239l-20.096,2.69c-0.497,0.066-0.867,0.49-0.867,0.991v17.592 c0,0.552,0.448,1,1,1h20.096c0.552,0,1-0.448,1-1V1C46.048,0.711,45.924,0.437,45.707,0.248z M44.048,20.282H25.952V4.565 l18.096-2.422V20.282z"></path> <path d="M20.952,24.336c0,0-0.001,0-0.002,0L2.046,24.375c-0.552,0.001-0.998,0.449-0.998,1v15.001 c0,0.503,0.374,0.928,0.873,0.992l18.904,2.406c0.043,0.005,0.085,0.008,0.127,0.008c0.242,0,0.478-0.088,0.661-0.25 c0.215-0.19,0.339-0.463,0.339-0.75V25.336c0-0.266-0.105-0.52-0.294-0.708C21.471,24.441,21.216,24.336,20.952,24.336z M19.952,41.647L3.048,39.495V26.373l16.904-0.035V41.647z"></path> <path d="M20.824,3.187l-19,2.445C1.325,5.697,0.952,6.122,0.952,6.624v14.658c0,0.552,0.448,1,1,1h19c0.552,0,1-0.448,1-1V4.179 c0-0.288-0.124-0.561-0.339-0.751S21.108,3.15,20.824,3.187z M19.952,20.282h-17V7.504l17-2.188V20.282z"></path> <path d="M45.05,24.375l-20.096-0.028c0,0-0.001,0-0.001,0c-0.265,0-0.519,0.105-0.706,0.292c-0.188,0.188-0.293,0.442-0.293,0.708 v17.935c0,0.5,0.37,0.924,0.866,0.991l20.096,2.718C44.959,46.997,45.004,47,45.048,47c0.241,0,0.475-0.087,0.658-0.247 c0.217-0.19,0.342-0.464,0.342-0.753V25.375C46.048,24.823,45.601,24.376,45.05,24.375z M44.048,44.855l-18.096-2.447v-16.06 l18.096,0.025V44.855z"></path> </g> </g> </g></svg> ) }

  return (
    <div>
      <h1 className='text-white tracking-tighter font-[500] md:leading-[80px] leading-[44px] text-[2.25em] md:text-[4.6875em]'>Exploring Mars,
        <br />
        Digital experience.</h1>

      <hr className='bg-white w-[60%] lg:w-[40%] mt-6 mb-8' />
      <p className='text-white/70 md:w-[60%] lg:w-[40%] text-sm text-left text-[0.875em] leading-[24px] font-[400] text-white'>Dive deep into interactive environments, unravel the science behind Mars exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips.</p>
      <button className='bg-white mt-[2em] py-[0.4375em] px-[0.765625em]  rounded-full text-[0.875em] '>Get Started</button>

      <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="w-[20em] flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
            <Logo1 />
                        </li>
                        <li>
            <Logo2 />
                        </li>
                        <li>
            <Logo3 />
                        </li>
                        <li>
            <Logo4 />
                        </li>
                        <li>
            <Logo5 />
                        </li>
                        <li>
            <Logo6 />
                        </li>

                        <li>
            <Logo1 />
                        </li>
                    </ul>
                </div>

    </div>
  )
}

export default Hero
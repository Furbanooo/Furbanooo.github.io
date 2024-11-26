class NavBar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const nav = document.createElement("nav");

    nav.classList.add("nav-bar");

    nav.innerHTML = `
      <ul>
        <li>
          <a href="home.html">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#ffffff" stroke-width="1.5"></path>
              <path d="M15 18H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>
            <span class="label">Home</span>
          </a>
        </li>
        <li>
          <a href="projectAndIdeas.html">
            <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.122a1 1 0 00.741.966l7 1.876A1 1 0 0011 14.998V14h2a1 1 0 001-1V3a1 1 0 00-1-1h-2v-.994A1 1 0 009.741.04l-7 1.876A1 1 0 002 2.882v10.24zM9 2.31v11.384l-5-1.34V3.65l5-1.34zM11 12V4h1v8h-1z" fill="#ffffff"></path> </g></svg>
            <span class="label">Projects & Ideas</span>
          </a>
        </li>
        <li>
          <a href="tools.html">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M28.354,1.354c0.115-0.115,0.167-0.279,0.139-0.439c-0.028-0.16-0.132-0.297-0.28-0.366 c-2.291-1.08-5.01-0.606-6.798,1.191c-1.698,1.709-2.291,4.393-1.499,6.637L8.377,19.916C7.75,19.692,7.08,19.58,6.381,19.58 c-1.714,0-3.376,0.682-4.559,1.872c-1.782,1.792-2.284,4.44-1.281,6.747c0.066,0.152,0.203,0.262,0.366,0.292 c0.164,0.031,0.331-0.021,0.447-0.139l3.491-3.509c0.23-0.232,0.601-0.263,0.793-0.068l1.507,1.577 c0.219,0.221,0.209,0.562-0.022,0.795l-3.478,3.5c-0.115,0.115-0.166,0.279-0.138,0.439c0.028,0.16,0.132,0.296,0.279,0.365 c0.829,0.391,1.701,0.588,2.591,0.588c1.572,0,3.065-0.632,4.207-1.78c1.698-1.708,2.291-4.392,1.498-6.636l11.539-11.54 c0.628,0.224,1.298,0.336,1.997,0.336c1.714,0,3.376-0.682,4.559-1.872c1.782-1.792,2.284-4.44,1.281-6.747 c-0.066-0.152-0.203-0.262-0.366-0.292c-0.161-0.028-0.33,0.021-0.447,0.139l-3.491,3.509c-0.215,0.216-0.58,0.214-0.801-0.01 l-1.499-1.499c-0.226-0.227-0.225-0.568-0.001-0.794L28.354,1.354z M24.146,6.354l1.499,1.499c0.599,0.602,1.625,0.605,2.218,0.009 l2.93-2.944c0.469,1.741-0.016,3.609-1.324,4.926c-0.997,1.003-2.399,1.577-3.85,1.577c-0.683,0-1.33-0.128-1.923-0.38 c-0.188-0.081-0.405-0.037-0.549,0.106l-12,12c-0.144,0.144-0.186,0.36-0.107,0.547c0.803,1.91,0.314,4.375-1.163,5.861 c-1.321,1.328-3.244,1.801-4.985,1.258l2.941-2.96c0.621-0.625,0.631-1.594,0.029-2.198l-1.506-1.577 c-0.581-0.585-1.614-0.549-2.218,0.062l-2.93,2.944c-0.469-1.741,0.016-3.609,1.324-4.926c0.997-1.003,2.399-1.577,3.85-1.577 c0.683,0,1.33,0.128,1.923,0.38c0.187,0.082,0.405,0.037,0.549-0.106l12-12c0.144-0.144,0.186-0.36,0.107-0.547 c-0.803-1.91-0.314-4.376,1.163-5.862c1.32-1.328,3.242-1.798,4.982-1.258l-2.96,2.961C23.53,4.766,23.53,5.734,24.146,6.354z"></path> <path fill="#ffffff" d="M29.21,30.647c-0.221,0.222-0.604,0.222-0.827-0.002l-10.03-10c-0.195-0.193-0.512-0.194-0.707,0.002 c-0.195,0.195-0.194,0.512,0.001,0.707l10.029,9.998c0.3,0.301,0.698,0.467,1.122,0.467c0,0,0,0,0,0 c0.424,0,0.822-0.166,1.128-0.474l1.429-1.493c0.615-0.618,0.615-1.587-0.001-2.206l-10-10c-0.195-0.195-0.512-0.195-0.707,0 s-0.195,0.512,0,0.707l9.999,9.999c0.229,0.23,0.229,0.564-0.007,0.802L29.21,30.647z"></path> <path fill="#ffffff" d="M5.854,3.146l-3-3c-0.195-0.195-0.512-0.195-0.707,0l-2,2c-0.195,0.195-0.195,0.512,0,0.707l3,3 C3.244,5.951,3.372,6,3.5,6s0.256-0.049,0.354-0.146L4.5,5.207l7.646,7.646C12.244,12.951,12.372,13,12.5,13 s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L5.207,4.5l0.646-0.646C6.049,3.658,6.049,3.342,5.854,3.146z M3.5,4.793 L1.207,2.5L2.5,1.207L4.793,3.5L3.5,4.793z"></path> </g> </g></svg>
            <span class="label">Tools</span>
          </a>
        </li>
        <li>
          <a href="certifications.html">
            <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.17 431.17" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M68.831,99.602h255.814c7.878,0,14.265-6.387,14.265-14.265c0-7.878-6.387-14.265-14.265-14.265H68.831 c-7.878,0-14.265,6.387-14.265,14.265C54.566,93.215,60.953,99.602,68.831,99.602z"></path> <path d="M68.831,160.465h255.814c7.878,0,14.265-6.387,14.265-14.265c0-7.878-6.387-14.265-14.265-14.265H68.831 c-7.878,0-14.265,6.387-14.265,14.265C54.566,154.078,60.953,160.465,68.831,160.465z"></path> <path d="M204.549,192.799H68.831c-7.878,0-14.265,6.387-14.265,14.265c0,7.878,6.387,14.265,14.265,14.265h135.718 c7.878,0,14.265-6.387,14.265-14.265C218.814,199.186,212.427,192.799,204.549,192.799z"></path> <path d="M430.373,409.679l-37.295-73.843l14.431-5.759c3.79-1.513,6.97-5.888,7.24-9.96l1.229-18.516 c0.206-3.102,1.778-7.941,3.434-10.569l9.886-15.702c2.175-3.452,2.175-8.861,0.001-12.314l-9.887-15.702 c-1.654-2.628-3.227-7.469-3.433-10.569l-1.228-18.516c-0.232-3.486-2.6-7.188-5.652-9.132V37.438 c0-15.732-12.798-28.53-28.529-28.53H28.529C12.798,8.908,0,21.706,0,37.438v244.381c0,15.732,12.798,28.529,28.529,28.529h224.396 l0.648,9.77c0.271,4.072,3.45,8.446,7.24,9.959l13.549,5.407l-37.474,74.195c-1.153,2.284-0.844,3.66-0.381,4.412 c0.293,0.477,1.011,1.275,2.523,1.275c0.756,0,1.627-0.204,2.589-0.606l30.697-12.852c0.755-0.316,1.653-0.483,2.597-0.483 c2.255,0,4.553,0.933,5.854,2.374l14.746,16.349c1.229,1.363,2.751,2.114,4.283,2.114c2.022,0,3.836-1.307,4.85-3.494l28.89-62.32 c0.063-0.001,0.125-0.001,0.188-0.002l28.891,62.322c1.014,2.188,2.827,3.494,4.851,3.494c1.531,0,3.053-0.751,4.282-2.115 l14.745-16.347c1.302-1.442,3.6-2.375,5.854-2.375c0.943,0,1.842,0.167,2.597,0.483l30.697,12.852 c0.962,0.402,1.833,0.606,2.589,0.606c1.513,0,2.23-0.799,2.523-1.275C431.217,413.339,431.526,411.963,430.373,409.679z M28.529,37.438h352.039l0.002,156.56l-11.152-13.417c-2.036-2.449-5.764-4.094-9.275-4.094c-0.855,0-1.673,0.098-2.433,0.291 l-17.998,4.581c-2.867,0.729-8.236,0.729-11.104,0l-17.996-4.581c-0.76-0.193-1.578-0.291-2.433-0.291 c-3.512,0-7.239,1.645-9.275,4.094l-11.866,14.277c-1.984,2.389-6.099,5.379-8.983,6.53l-17.24,6.882 c-3.791,1.513-6.971,5.887-7.241,9.959l-1.229,18.516c-0.205,3.102-1.777,7.941-3.433,10.569l-9.886,15.702 c-2.175,3.452-2.175,8.862,0,12.314l4.085,6.488H28.529V37.438z M334.16,329.825c-33.497,0-60.652-27.154-60.652-60.652 c0-33.498,27.155-60.652,60.652-60.652c33.498,0,60.654,27.154,60.654,60.652C394.815,302.671,367.658,329.825,334.16,329.825z"></path> </g> </g></svg>
            <span class="label">Certification</span>
          </a>
        </li>
      </ul>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .nav-bar {
        top: 20px;
        left: 50%;
        transform: translateX(-30%);
        background-color: #808080;
        border-radius: 20px;
        padding-top: 20px;
        display: flex;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: width 0.3s ease-in-out;
      }
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
      }
      li {
        margin: 0 10px;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: white;
        position: relative;
      }
      .icon {
        width: 24px;
        height: 24px;
        fill: white;
        transition: transform 0.3s ease;
      }
      .label {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      a:hover .icon {
        transform: scale(1.2);
      }
      a:hover .label {
        opacity: 1;
        transform: translateY(0);
      }

      .nav-bar ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
      }

      .nav-bar li {
        margin: 0 15px;
      }

      .nav-bar a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: white;
        position: relative;
      }

      .nav-bar .icon {
        width: 24px;
        height: 24px;
        fill: white;
        transition: transform 0.3s ease;
      }

      .nav-bar .label {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .nav-bar a:hover .icon {
        transform: scale(1.2);
      }

      .nav-bar a:hover .label {
        opacity: 1;
        transform: translateY(0);
      }

      .label {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      }
    
      a:hover .label {
      opacity: 1;
      transform: translateY(0);
}

    `;

    shadow.appendChild(style);
    shadow.appendChild(nav);

    shadow.querySelectorAll(".nav-bar a").forEach((item) => {
      item.addEventListener("mouseover", () => item.classList.add("hovered"));
      item.addEventListener("mouseout", () => item.classList.remove("hovered"));
    });
  }
}
customElements.define("nav-bar", NavBar);


class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    shadow.appendChild(footer);
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();
    const style = document.createElement("style");
    style.textContent = `
      .footer { 
        left: 50%; 
        transform: translateX(-20%);
      }
    `;
    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML = `    
        &copy; ${currentYear} | portfolio by Furband GBAGUIDI
    `;
  }
}
customElements.define("site-footer", Footer);

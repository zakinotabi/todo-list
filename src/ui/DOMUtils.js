export class DOMUtils {
  static createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
  }

  static appendToElement(parentId, child) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.appendChild(child);
    }
  }

  static createButton(text, title, className, onClick) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.title = title;
    button.classList.add(className);
    button.addEventListener("click", onClick);
    return button;
  }

  static createInput(type, className) {
    const input = document.createElement("input");
    input.type = type;
    input.classList.add(className);
    return input;
  }
}

export class SvgImages {
  static editSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(254.59340659340654 254.59340659340654) rotate(180) scale(2.81 2.81) matrix(1 0 0 -1 0 90)" >
	<path d="M 89 90 c -0.125 0 -0.251 -0.023 -0.371 -0.071 l -22.976 -9.182 c -0.126 -0.051 -0.24 -0.126 -0.336 -0.222 L 3.149 18.357 C 1.119 16.326 0 13.626 0 10.753 S 1.119 5.181 3.15 3.15 C 5.181 1.119 7.881 0 10.753 0 s 5.573 1.119 7.604 3.149 l 62.168 62.168 c 0.096 0.096 0.171 0.21 0.222 0.336 l 9.182 22.976 c 0.148 0.371 0.062 0.796 -0.222 1.078 C 89.516 89.898 89.26 90 89 90 z M 66.586 78.966 l 20.62 8.24 l -8.24 -20.62 L 16.943 4.563 C 15.29 2.911 13.091 2 10.753 2 S 6.217 2.911 4.564 4.564 S 2 8.416 2 10.753 s 0.911 4.536 2.563 6.189 L 66.586 78.966 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 66.705 67.705 c -0.256 0 -0.512 -0.098 -0.707 -0.293 L 21.504 22.918 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 44.494 44.494 c 0.391 0.391 0.391 1.023 0 1.414 C 67.217 67.607 66.961 67.705 66.705 67.705 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 89 90 c -0.125 0 -0.251 -0.023 -0.371 -0.071 l -22.976 -9.182 c -0.313 -0.125 -0.541 -0.398 -0.608 -0.728 s 0.034 -0.671 0.272 -0.908 l 13.794 -13.794 c 0.237 -0.238 0.582 -0.342 0.908 -0.272 c 0.329 0.067 0.603 0.296 0.728 0.608 l 9.182 22.976 c 0.148 0.371 0.062 0.796 -0.222 1.078 C 89.516 89.898 89.26 90 89 90 z M 67.805 79.453 l 19.401 7.753 l -7.753 -19.401 L 67.805 79.453 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 89 90 c -0.125 0 -0.251 -0.023 -0.371 -0.071 l -11.487 -4.591 c -0.313 -0.125 -0.541 -0.398 -0.608 -0.728 s 0.034 -0.671 0.272 -0.908 l 6.896 -6.896 c 0.238 -0.238 0.581 -0.342 0.908 -0.272 c 0.329 0.067 0.603 0.296 0.728 0.608 l 4.591 11.487 c 0.148 0.371 0.062 0.796 -0.222 1.078 C 89.516 89.898 89.26 90 89 90 z M 79.293 84.044 l 7.913 3.162 l -3.162 -7.913 L 79.293 84.044 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 8.909 23.702 c -0.256 0 -0.512 -0.098 -0.707 -0.293 l -5.052 -5.052 C 1.119 16.326 0 13.626 0 10.753 S 1.119 5.181 3.15 3.15 C 5.181 1.119 7.881 0 10.753 0 s 5.573 1.119 7.604 3.149 l 5.052 5.052 c 0.391 0.391 0.391 1.023 0 1.414 L 9.616 23.409 C 9.42 23.604 9.165 23.702 8.909 23.702 z M 10.753 2 C 8.415 2 6.217 2.911 4.564 4.564 S 2 8.415 2 10.753 s 0.91 4.536 2.563 6.189 l 4.345 4.345 L 21.288 8.909 l -4.345 -4.345 C 15.29 2.91 13.092 2 10.753 2 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`;
  static deleteSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 67.954 90 H 22.045 c -0.53 0 -0.967 -0.413 -0.998 -0.941 l -3.865 -66.018 c -0.016 -0.275 0.082 -0.544 0.271 -0.745 s 0.452 -0.314 0.728 -0.314 h 53.639 c 0.275 0 0.538 0.114 0.728 0.314 c 0.188 0.2 0.287 0.47 0.271 0.745 l -3.865 66.018 C 68.922 89.587 68.483 90 67.954 90 z M 22.989 88 h 44.022 l 3.748 -64.018 H 19.24 L 22.989 88 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 77.451 23.982 H 12.548 c -0.552 0 -1 -0.448 -1 -1 v -4.053 c 0 -4.732 3.85 -8.582 8.582 -8.582 h 49.739 c 4.732 0 8.582 3.85 8.582 8.582 v 4.053 C 78.451 23.534 78.004 23.982 77.451 23.982 z M 13.548 21.982 h 62.903 v -3.053 c 0 -3.629 -2.953 -6.582 -6.582 -6.582 H 20.13 c -3.629 0 -6.582 2.953 -6.582 6.582 V 21.982 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 57.48 12.347 H 32.52 c -0.552 0 -1 -0.448 -1 -1 C 31.52 5.09 36.61 0 42.866 0 h 4.268 C 53.391 0 58.48 5.09 58.48 11.347 C 58.48 11.899 58.033 12.347 57.48 12.347 z M 33.573 10.347 h 22.855 C 55.927 5.662 51.95 2 47.134 2 h -4.268 C 38.05 2 34.073 5.662 33.573 10.347 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 56.117 75.355 c -0.02 0 -0.039 -0.001 -0.06 -0.002 c -0.551 -0.032 -0.972 -0.505 -0.939 -1.057 l 2.248 -38.404 c 0.032 -0.551 0.484 -0.97 1.057 -0.94 c 0.551 0.033 0.972 0.506 0.939 1.057 l -2.248 38.404 C 57.083 74.945 56.643 75.355 56.117 75.355 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 33.883 75.355 c -0.525 0 -0.966 -0.41 -0.998 -0.941 L 30.637 36.01 c -0.033 -0.551 0.388 -1.024 0.939 -1.057 c 0.556 -0.027 1.024 0.389 1.057 0.94 l 2.248 38.404 c 0.033 0.552 -0.388 1.024 -0.939 1.057 C 33.922 75.354 33.902 75.355 33.883 75.355 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 45 75.355 c -0.552 0 -1 -0.447 -1 -1 V 35.951 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 38.404 C 46 74.908 45.552 75.355 45 75.355 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`;

  static arrow = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`;
}

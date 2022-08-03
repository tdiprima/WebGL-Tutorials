let vertices = [
  -0.5, -0.2, 0.0,
  -0.1, 0.7, 0.0,
  -0.3, -0.3, 0.0,
  0.2, 0.6, 0.0,
  0.7, -0.9, 0.0,
  0.7, 0.9, 0.0
];

let vertex_buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER, null);

let vertCode =
  'attribute vec3 coordinates;' +
  'void main(void)' +
  '{' +
  ' gl_Position = vec4(coordinates, 1.0);' +
  '}';

let vertShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertShader, vertCode);

gl.compileShader(vertShader);

let fragCode =
  'void main(void)' +
  '{' +
  ' gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
  '}';

let fragShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragShader, fragCode);

gl.compileShader(fragShader);

let shaderProgram = gl.createProgram();

gl.attachShader(shaderProgram, vertShader);

gl.attachShader(shaderProgram, fragShader);

gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram);

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

let coord = gl.getAttribLocation(shaderProgram, 'coordinates');

gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

gl.enableVertexAttribArray(coord);

gl.clearColor(1.0, 0.0, 0.0, 1.0);

gl.enable(gl.DEPTH_TEST);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.viewport(0, 0, canvas.width, canvas.height);

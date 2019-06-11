function getTextCoords(w, h, system) {
    // let canvas = document.getElementById(canvas_name);
    // let ctx = canvas.getContext('2d'),
    //     width = canvas.width,
    //     height = canvas.height;

    let [x, y] = [w / 2 + 50, h / 2 + 10];

    let sq = 16;
    let space = 6;
    let ps_o, ps_f, ps_t, ps_w, ps_a, ps_r, ps_e,
        ps_e_1, ps_n, ps_g, ps_i, ps_n_1, ps_e_2, ps_e_3, ps_r_1;

    let [p, q] = [x + 2 * space + 2 * sq, y + sq * 3];

    let ps_s = new system([
        [x - 2 * sq, y + sq],
        [x, y + sq],
        [x, y + 2 * sq],
        [x - 2 * sq, y + 4 * sq]
    ], x, y);

    ps_o = new system([
        [x + space, y + 2 * sq],
        [x + space + sq, y + 2 * sq],
        [x + space + sq, y + sq],
        [x + space, y + sq],
    ], x + space, y + sq);

    ps_f = new system([
        [x + 2 * space + 2 * sq, y + sq],
        [x + 2 * space + sq, y + sq],
        [x + 2 * space + sq, y + 2 * sq],
        [x + 2 * space + sq + sq / 2, y + 2 * sq],
        [x + 2 * space + sq, y + 2 * sq],
        [x + 2 * space + sq, y + 4 * sq],
    ], x + 2 * space + 2 * sq, y + sq);

    ps_t = new system([
        [x + 3 * space + 2 * sq, y + sq],
        [x + 3 * space + 2 * sq + sq / 2, y + sq],
        [x + 3 * space + 2 * sq, y + sq],
        [x + 3 * space + 2 * sq, y + 2 * sq],
        [x + 3 * space + 3 * sq, y + 2 * sq],
        [x + 3 * space + 3 * sq, y + 2 * sq],
    ], x + 3 * space + 2 * sq, y);

    ps_w = new system([
        [x + 4 * space + 3 * sq, y + 2 * sq],
        [x + 4 * space + 3 * sq + sq / 2, y + 2 * sq - 0.7 * sq],
        [x + 4 * space + 3 * sq + sq, y + 2 * sq],
        [x + 4 * space + 4 * sq, y + sq],
    ], x + 4 * space + 3 * sq, y + sq);

    ps_a = new system([
        [x + 5 * space + 5 * sq, y + sq / 2],
        [x + 5 * space + 4 * sq, y + sq],
        [x + 5 * space + 4 * sq, y + 2 * sq],
        [x + 5 * space + 4 * sq, y + 2 * sq - sq / 2],
        [x + 5 * space + 5 * sq, y + 2 * sq - sq / 2]
    ], x + 5 * space + 5 * sq, y + 2 * sq);

    ps_r = new system([
        [x + 6 * space + 6 * sq, y + sq],
        [x + 6 * space + 5 * sq, y + sq / 2],
        [x + 6 * space + 5 * sq, y + sq * 2],
    ], x + 6 * space + 6 * sq, y + sq + sq * 0.2);

    ps_e = new system([
        [x + 7 * space + 6 * sq, y + sq],
        [x + 7 * space + 6 * sq, y + sq + sq / 2],
        [x + 7 * space + 6 * sq + sq / 2, y + sq + sq / 2],
        [x + 7 * space + 6 * sq, y + sq + sq / 2],
        [x + 7 * space + 6 * sq, y + 2 * sq],
        [x + 7 * space + 7 * sq, y + 2 * sq],
        // [x+6*space+5*sq, y+sq*2],
    ], x + 7 * space + 7 * sq, y + sq);

    ps_e_1 = new system([
        [p, q],
        [p, q + sq / 2],
        [p + sq / 2, q + sq / 2],
        [p, q + sq / 2],
        [p, q + sq],
        [p + sq, q + sq],
    ], p + sq, q);

    ps_n = new system([
        [p + 2 * sq + space, q + sq],
        [p + sq + space, q],
        [p + sq + space, q + sq],
    ], p + 2 * sq + space, q)

    ps_g = new system([
        [p + 2 * space + 3 * sq, q + 0.5 * sq],
        [p + 2 * space + 3 * sq, q + sq],
        [p + 2 * space + 2 * sq, q + sq],
        [p + 2 * space + 2 * sq, q],
        [p + 2 * space + 3 * sq, q],

    ], p + 2 * space + 2.5 * sq, q + 0.5 * sq)

    ps_i = new system([
        [p + 3 * space + 3 * sq, q + sq],
    ], p + 3 * space + 3 * sq, q);

    ps_n_1 = new system([
        [p + 4 * space + 4 * sq, q + sq],
        [p + 4 * space + 3 * sq, q],
        [p + 4 * space + 3 * sq, q + sq],
    ], p + 4 * space + 4 * sq, q);

    ps_e_2 = new system([
        [p + sq * 4 + 5 * space, q],
        [p + sq * 4 + 5 * space, q + sq / 2],
        [p + sq * 4 + 5 * space + sq / 2, q + sq / 2],
        [p + sq * 4 + 5 * space, q + sq / 2],
        [p + sq * 4 + 5 * space, q + sq],
        [p + sq * 5 + 5 * space, q + sq],
    ], p + sq * 5 + 5 * space, q);

    ps_e_3 = new system([
        [p + sq * 5 + 6 * space, q],
        [p + sq * 5 + 6 * space, q + sq / 2],
        [p + sq * 5 + 6 * space + sq / 2, q + sq / 2],
        [p + sq * 5 + 6 * space, q + sq / 2],
        [p + sq * 5 + 6 * space, q + sq],
        [p + sq * 6 + 6 * space, q + sq],
    ], p + sq * 6 + 6 * space, q);

    ps_r_1 = new system([
        [p + sq * 7 + 7 * space, q],
        [p + sq * 6 + 7 * space, q - sq / 2],
        [p + sq * 6 + 7 * space, q + sq],
    ], p + sq * 7 + 7 * space, q + 0.2 * sq);

    ps_last_2 = new system([
        // [p + sq * 7 + 7 * space, q],
        // [p + sq * 6 + 7 * space, q - q],
        // [p + sq * 5 + 7 * space, q - 2*q],
        [700, 100],
    ], p + sq * 6 + 7 * space, q + sq, true);

    return [ps_s, ps_o, ps_f, 
            ps_t, ps_w, ps_a, 
            ps_r, ps_e, ps_e_1, 
            ps_n, ps_g, ps_i, 
            ps_n_1, ps_e_2, ps_e_3, 
            ps_r_1, ps_last_2];
}
// let canvas = document.getElementById('nodes-canvas');
// let ctx = canvas.getContext('2d'),
//     width = canvas.width,
//     height = canvas.height;

// let [x, y] = [width / 2, height / 2];

// let sq = 16;
// let space = 6;
// let ps_o, ps_f, ps_t, ps_w, ps_a, ps_r, ps_e,
//     ps_e_1, ps_n, ps_g, ps_i, ps_n_1, ps_e_2, ps_e_3, ps_r_1;

// let [p, q] = [x + 2 * space + 2 * sq, y + sq * 3]

// let ps_s = new ParticleSystem([
//     [x - 2 * sq, y + sq],
//     [x, y + sq],
//     [x, y + 2 * sq],
//     [x - 2 * sq, y + 4 * sq]
// ], x, y);

// ps_o = new ParticleSystem([
//     [x + space, y + 2 * sq],
//     [x + space + sq, y + 2 * sq],
//     [x + space + sq, y + sq],
//     [x + space, y + sq],
// ], x + space, y + sq);

// ps_f = new ParticleSystem([
//     [x + 2 * space + 2 * sq, y + sq],
//     [x + 2 * space + sq, y + sq],
//     [x + 2 * space + sq, y + 2 * sq],
//     [x + 2 * space + sq + sq / 2, y + 2 * sq],
//     [x + 2 * space + sq, y + 2 * sq],
//     [x + 2 * space + sq, y + 4 * sq],
// ], x + 2 * space + 2 * sq, y + sq);

// ps_t = new ParticleSystem([
//     [x + 3 * space + 2 * sq, y + sq],
//     [x + 3 * space + 2 * sq + sq / 2, y + sq],
//     [x + 3 * space + 2 * sq, y + sq],
//     [x + 3 * space + 2 * sq, y + 2 * sq],
//     [x + 3 * space + 3 * sq, y + 2 * sq],
//     [x + 3 * space + 3 * sq, y + 2 * sq],
// ], x + 3 * space + 2 * sq, y);

// ps_w = new ParticleSystem([
//     [x + 4 * space + 3 * sq, y + 2 * sq],
//     [x + 4 * space + 3 * sq + sq / 2, y + 2 * sq - 0.7 * sq],
//     [x + 4 * space + 3 * sq + sq, y + 2 * sq],
//     [x + 4 * space + 4 * sq, y + sq],
// ], x + 4 * space + 3 * sq, y + sq);

// ps_a = new ParticleSystem([
//     [x + 5 * space + 5 * sq, y + sq / 2],
//     [x + 5 * space + 4 * sq, y + sq],
//     [x + 5 * space + 4 * sq, y + 2 * sq],
//     [x + 5 * space + 4 * sq, y + 2 * sq - sq / 2],
//     [x + 5 * space + 5 * sq, y + 2 * sq - sq / 2]
// ], x + 5 * space + 5 * sq, y + 2 * sq);

// ps_r = new ParticleSystem([
//     [x + 6 * space + 6 * sq, y + sq],
//     [x + 6 * space + 5 * sq, y + sq / 2],
//     [x + 6 * space + 5 * sq, y + sq * 2],
// ], x + 6 * space + 6 * sq, y + sq + sq * 0.2);

// ps_e = new ParticleSystem([
//     [x + 7 * space + 6 * sq, y + sq],
//     [x + 7 * space + 6 * sq, y + sq + sq / 2],
//     [x + 7 * space + 6 * sq + sq / 2, y + sq + sq / 2],
//     [x + 7 * space + 6 * sq, y + sq + sq / 2],
//     [x + 7 * space + 6 * sq, y + 2 * sq],
//     [x + 7 * space + 7 * sq, y + 2 * sq],
//     // [x+6*space+5*sq, y+sq*2],
// ], x + 7 * space + 7 * sq, y + sq);

// ps_e_1 = new ParticleSystem([
//     [p, q],
//     [p, q + sq / 2],
//     [p + sq / 2, q + sq / 2],
//     [p, q + sq / 2],
//     [p, q + sq],
//     [p + sq, q + sq],
// ], p + sq, q);

// ps_n = new ParticleSystem([
//     [p + 2 * sq + space, q + sq],
//     [p + sq + space, q],
//     [p + sq + space, q + sq],
// ], p + 2 * sq + space, q)

// ps_g = new ParticleSystem([
//     [p + 2 * space + 3 * sq, q + 0.5 * sq],
//     [p + 2 * space + 3 * sq, q + sq],
//     [p + 2 * space + 2 * sq, q + sq],
//     [p + 2 * space + 2 * sq, q],
//     [p + 2 * space + 3 * sq, q],

// ], p + 2 * space + 2.5 * sq, q + 0.5 * sq)

// ps_i = new ParticleSystem([
//     [p + 3 * space + 3 * sq, q + sq],
// ], p + 3 * space + 3 * sq, q);

// ps_n_1 = new ParticleSystem([
//     [p + 4 * space + 4 * sq, q + sq],
//     [p + 4 * space + 3 * sq, q],
//     [p + 4 * space + 3 * sq, q + sq],
// ], p + 4 * space + 4 * sq, q);

// ps_e_2 = new ParticleSystem([
//     [p + sq * 4 + 5 * space, q],
//     [p + sq * 4 + 5 * space, q + sq / 2],
//     [p + sq * 4 + 5 * space + sq / 2, q + sq / 2],
//     [p + sq * 4 + 5 * space, q + sq / 2],
//     [p + sq * 4 + 5 * space, q + sq],
//     [p + sq * 5 + 5 * space, q + sq],
// ], p + sq * 5 + 5 * space, q);

// ps_e_3 = new ParticleSystem([
//     [p + sq * 5 + 6 * space, q],
//     [p + sq * 5 + 6 * space, q + sq / 2],
//     [p + sq * 5 + 6 * space + sq / 2, q + sq / 2],
//     [p + sq * 5 + 6 * space, q + sq / 2],
//     [p + sq * 5 + 6 * space, q + sq],
//     [p + sq * 6 + 6 * space, q + sq],
// ], p + sq * 6 + 6 * space, q);

// ps_r_1 = new ParticleSystem([
//     [p + sq * 7 + 7 * space, q],
//     [p + sq * 6 + 7 * space, q - sq / 2],
//     [p + sq * 6 + 7 * space, q + sq],
// ], p + sq * 7 + 7 * space, q + 0.2 * sq);


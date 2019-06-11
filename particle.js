
class Particle {
    constructor(location, velocity,
        acceleration, particle = null, destination = null,
        radius = 1, last = false) {
        this.location = location;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.finished = false;
        this.particle = particle;

        this.destination = destination;
        this.current = 0;
        this.lifespan = 255;

        this.r = 222;
        this.g = 56;
        this.b = 244;
        this.o = 0;
        this.radius = radius;

        this.last = last;
        this.at_point = false;
    }

    get x() {
        return this.location.x;
    }

    get y() {
        return this.location.y;
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        let direction = this.destination;
        let c = this.current;
        // rgb(222, 56, 244) from
        // rgb(56, 200, 244)
        if (this.r > 56) this.r -= 5;
        if (this.g < 200) this.g += 5;
        if (this.g >= 200) this.b -= 1;
        if (c >= direction.length) return;

        let d = new Vector(direction[c][0], direction[c][1]);

        if (this.location.dist(d) < 1) {
            this.current++;
            if (this.current < direction.length) {
                d = new Vector(direction[this.current][0],
                    direction[this.current][1])
            } else {
                this.finished = true;
                return;
            }

        }

        d.sub(this.location);
        // d.setMag(5);
        this.acceleration = d;

        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.lifespan -= 1;

    }

    display(ctx) {
        ctx.beginPath();
        //ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
        ctx.fillStyle = '#D99D6D'
        ctx.arc(this.x, this.y, getRIB(0, 3), 0, Math.PI * 2, true);
        ctx.fill();
        // ctx.fillRect(this.x, this.y, 2, 2);
        ctx.closePath();
        this.update();
        this.limit_v(0.8);
    }

    isDead() {
        return this.finished && this.lifespan <= 40;
    }

    limit_v(n) {
        this.velocity.limit(n);
    }

}

class FireParticle extends Particle {

    update() {
        let direction = this.destination;
        let c = this.current;

        if (c >= direction.length) return;

        let d = new Vector(direction[c][0], direction[c][1]);

        if (this.location.dist(d) < 1) {
            this.current++;
            if (this.current < direction.length) {
                d = new Vector(direction[this.current][0],
                    direction[this.current][1])
            } else {
                if (!this.last) {
                    this.finished = true;
                    return;
                }

                this.at_point = true;
            }

        }

        d.sub(this.location);
        d.setMag(5);
        this.acceleration = d;

        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        // this.lifespan -= 1;

    }

    display(ctx) {
        if (!this.finished) {

            let rand = getRIB(1, 3);
            let radius = [
                rand,
                rand + 2,
                rand + 5,
                rand + 9,
                rand + 18,
                rand + 32,
                rand + 64,
            ];
            let colors = [
                'rgba(255, 255, 255, 1)',
                'rgb(246, 226, 126)',
                'rgb(246, 212, 126)',
                'rgb(246, 194, 126)',
                'rgb(246, 180, 126)',
                'rgb(246, 168, 126)',
                'rgb(246, 158, 126)',
                'rgba(255, 255, 255, 1)',
                'rgb(246, 226, 126)',
                'rgb(246, 212, 126)',
                'rgb(246, 194, 126)',
                'rgb(246, 180, 126)',
                'rgb(246, 168, 126)',
                'rgb(246, 158, 126)',
            ]
            let colors_c = [
                'rgba(255, 255, 255, 1)',
                'rgba(246, 226, 126, .5)',
                'rgba(246, 212, 126, .2)',
                'rgba(246, 194, 126, .1)',
                'rgba(246, 180, 126, .05)',
                'rgba(246, 168, 126, 0.04)',
                'rgba(246, 158, 126, 0.02)',
            ]
            let g = 90;
            for (let i = colors_c.length - 1; i >= 0; i--) {
                ctx.beginPath();
                ctx.fillStyle = colors_c[i];
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 33;
                ctx.shadowColor = colors_c[i];
                ctx.arc(this.x, this.y,
                        radius[i], 0,
                        Math.PI * 2, true);

                ctx.fill();
                ctx.closePath();
            }

            ctx.save();
            for (let i = colors.length - 1; i >= 0; i--) {
                if (g <= 0) g = 90;
                ctx.beginPath();
                ctx.fillStyle = colors[i];
                ctx.strokeStyle = colors[i];
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 15;
                ctx.shadowColor = colors[i];
                ctx.lineCap = 'round';
                ctx.translate(this.x, this.y);
                ctx.rotate(g * Math.PI / 180);
                ctx.moveTo(this.x, this.y)
                ctx.lineTo(getRIB(1, 8), getRIB(1, 8));
                ctx.stroke();
                // ctx.strokeStyle = colors[i];
                // ctx.moveTo(0, 0)
                // ctx.lineTo(getRIB(5, 30), 1);
                // ctx.stroke();
                ctx.translate(-this.x, -this.y);
                ctx.closePath();
                this.last ? g -= getRIB(20, 60) : g -= 60;

            }
            ctx.restore();
        }


        this.update();
        this.last ? this.limit_v(2) : this.limit_v(0.8);
    }
}

class ParticleSystem {
    constructor(targets, x, y) {
        this.particles = [];

        this.square_particles = [];
        this.line_particles = [];
        this.targets = targets;
        this.current = 0;
        this.finished = false;

        this.x = x;
        this.y = y;

    }

    run(ctx) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            if (p.finished) this.finished = true;
            p.display(ctx);
            if (p.isDead()) this.particles.splice(i, 1);
        }

        if (this.particles.length < 255) this.addParticle(this.x, this.y);
        else this.particles.splice(0, 20)
    }

    addParticle(x, y) {

        let location = LVector(x, y);
        let velocity = VVector(0, 0);
        let acceleration = AVector(0, 0.05);
        let p = new Particle(location, velocity, acceleration,
            null, this.targets);


        this.particles.push(p);
    }

    applyForce(force) {
        for (let p of this.particles) p.applyForce(force)
    }

    // applyRepeller(r) {
    //     for (let p of this.particles) {
    //         let force = r.repel(p);
    //         p.applyForce(force);
    //     }
    // }
}



class FireParticleSystem extends ParticleSystem {
    constructor(targets, x, y, last) {
        super(targets, x, y);

        this.particle = null;
        this.particles = [];

        this.square_particles = [];
        this.line_particles = [];
        this.targets = targets;
        this.current = 0;

        this.x = x;
        this.y = y;

        this.finished = false;
        this.last = last;
        this.at_point = false;

    }

    run(ctx) {
        // for (let i = this.particles.length - 1; i >= 0; i--) {
        //     let p = this.particles[i];
        //     if (p.finished) this.finished = true;
        //     p.display(ctx);
        //     if (p.isDead()) this.particles.splice(i, 1);
        // }

        // if (this.particles.length < 255) this.addParticle(this.x, this.y);
        // else this.particles.splice(0, 20);
        if (!this.particle) this.addParticle(this.x, this.y);
        if (this.particle.finished && !this.particle.last) {
            this.finished = true;
            return;
        } else if (this.particle.at_point) {
            this.at_point = true;
            return;
        }
        this.particle.display(ctx);
    }

    addParticle(x, y) {
        let location = LVector(x, y);
        let velocity = VVector(0, 0);
        let acceleration = AVector(0, 0.05);
        let last;
        if (this.last) last = true;
        let p = new FireParticle(location, velocity, acceleration,
            null, this.targets, 1, last);
        this.particle = p;

    }
}
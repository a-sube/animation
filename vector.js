class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        if (v instanceof Vector) {
            this.x += v.x;
            this.y += v.y;
        } else {
            this.x += v;
            this.y += v;
        }
        return this;
    }

    sub(v) {
        if (v instanceof Vector) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    }

    multiply(v) {
        if (v instanceof Vector) {
            this.x *= v.x;
            this.y *= v.y;
        } else {
            this.x *= v;
            this.y *= v;
        }
        return this;
    }

    divide(v) {
        if (v instanceof Vector) {
            if (v.x != 0) this.x /= v.x;
            if (v.y != 0) this.y /= v.y;
        } else {
            if (v != 0) {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    }

    equals(v) {
        return this.x == v.x && this.y == v.y;
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    cross(v) {
        return this.x * v.y - this.y * v.x;
    }

    mag() {
        return Math.sqrt(this.dot(this));
    }

    normalize() {
        return this.divide(this.mag());
    }

    min() {
        return Math.min(this.x, this.y);
    }

    max() {
        return Math.max(this.x, this.y);
    }

    toAngles() {
        return -Math.atan2(-this.y, this.x);
    }

    angelTo(a) {
        return Math.acos(this.dot(a) / (this.mag() * a.mag()));
    }

    toArray(n) {
        return [this.x, this.y].slice(0, n || 2);
    }

    clone() {
        return new Vector(this.x, this.y);
    }

    set(x = this.x, y = this.y) {
        this.x = x;
        this.y = y;
        return this;
    }

    limit(high) {
        if (this.mag() > high) {
            this.normalize();
            this.multiply(high);
        }
    }

    setMag(v_or_len, len) {
        if (len === undefined) {
            len = v_or_len;
            this.normalize();
            this.multiply(len);
        } else {
            var v = v_or_len;
            v.normalize();
            v.multiply(len);
            return v;
        }
    }

    dist(v) {
        let dx = this.x - v.x,
            dy = this.y - v.y;
        
        return Math.sqrt(dx*dx + dy*dy);
    }

}
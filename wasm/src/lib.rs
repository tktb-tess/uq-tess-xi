use num_bigint::BigUint;
//use js_sys::BigInt as jsBigInt;

pub fn mod_pow(b: &BigUint, p: &BigUint, m: &BigUint) -> BigUint {
    let one = BigUint::from(1u8);

    if (b % m == one) || (b % m == BigUint::ZERO) {
        return b.clone();
    } else if *b == m - &one {
        return if p % BigUint::from(2u8) == one { m - one } else { one };
    };

    let mut res = one.clone();
    let [mut base, mut power] = [b.clone(), p.clone()];

    while power > BigUint::ZERO {
        if &power & &one == one {
            res = res * &base % m;
        };

        base = &base * &base % m;
        power >>= 1;
    }

    res
}


use num_bigint::{BigUint, BigInt};
use js_sys::BigInt as jsBigInt;

fn bigint_to_js(v: &BigInt) -> jsBigInt {
    v.to_string().parse().unwrap()
}

fn biguint_to_js(v: &BigUint) -> jsBigInt {
    v.to_string().parse().unwrap()
}

fn from_js_bigint(v: &jsBigInt) -> BigInt {
    v.to_string(10)
    .unwrap()
    .as_string()
    .unwrap()
    .parse()
    .unwrap()
}

pub fn mod_pow(b: &BigUint, p: &BigUint, m: &BigUint) -> BigUint {
    let one = BigUint::from(1u8);

    if (b % m == one) || (b % m == BigUint::ZERO) {
        return b.clone();
    } else if *b == m - &one {
        return if p % BigUint::from(2u8) == one { m - one } else { one };
    };

    let mut res = one.clone();
    let mut base = b.clone();
    let mut power = p.clone();

    while power > BigUint::ZERO {
        if &power & &one == one {
            res = res * &base % m;
        };

        base = &base * &base % m;
        power >>= 1;
    }

    res
}


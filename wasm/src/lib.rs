use num_bigint::{BigInt, BigUint};
//use js_sys::BigInt as jsBigInt;

pub fn mod_pow(b: &BigUint, p: &BigUint, m: &BigUint) -> BigUint {
    let one = BigUint::from(1u8);

    if (b % m == one) || (b % m == BigUint::ZERO) {
        return b.clone();
    } else if *b == m - &one {
        return if p % BigUint::from(2u8) == one { m - one } else { one };
    };

    let mut res = one.clone();

    while *p > BigUint::ZERO {
        if p & &one == one {
            res = res * b % m;
        };
        
    }

    res
}


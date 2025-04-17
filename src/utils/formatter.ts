export const formatCount = (i: number | string): string => {
    const n = typeof i === "string" ? Number(i) : i;

    if (n >= 1000000000000) {
        return (n / 1000000000000).toFixed(1) + "T";
        // Trillion (T)
    }
    else if (n >= 1000000000) {
        return (n / 1000000000).toFixed(1) + "B";
        // Billion (B)
    }
    else if (n >= 1000000) {
        return (n / 1000000).toFixed(1) + "M";
        // Million (M)
    }
    else if (n >= 1000) {
        return (n / 1000).toFixed(1) + "K";
        // Thousand (K)
    }
    else if (n >= 100) {
        return n.toString();
    }

    return n.toString();
};

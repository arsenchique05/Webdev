def in1to10(n, outside_mode):
    return (1 <= n <= 10 and not outside_mode) or (outside_mode and (n <= 1 or n >= 10))

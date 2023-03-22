# Crie uma função que receba dois números e retorne o maior deles.

def bigger(number, other):
    if other > number:
        return other
    return number


a = bigger(12, 30)
print(a)

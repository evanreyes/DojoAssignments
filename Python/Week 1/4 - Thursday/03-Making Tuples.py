my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def dict_to_tuple(d):
    l = []
    for i in d:
        tup = (i, d[i])
        l.append(tup)
    print l

dict_to_tuple(my_dict)

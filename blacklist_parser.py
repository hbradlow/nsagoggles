blacklist = []
with open("blacklist_newline.txt") as f:
    try:
        item = f.next()
        while item:
            blacklist.append(item.strip())
            item = f.next()
    except StopIteration:
        pass
with open("blacklist_comma.txt") as f:
    data = f.read()
    for item in data.split(","):
        blacklist.append(item.strip())
with open("blacklist.js","w") as f:
    f.write("blacklist = ")
    f.write(str(blacklist))
    f.write(";\n")

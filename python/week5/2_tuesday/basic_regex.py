import re

def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex,word):
            matches.append(word)
    return matches

# All words that contain a "v"
query1 = r'v'

# All words that contain a double-"s"
query2 = r's{2}'

# All words that end with an "e"
query3 = r'e$'

# All words that contain an "b", any character, then another "b"
query4 = r'b.b'

# All words that contain an "b", at least one character, then another "b"
query5 = r'b\w+b'

# All words that contain an "b", any number of characters (including zero), then another "b"
query6 = r'b\w+b'

# All words that include all five vowels in order
query7 = r'a\w+e\w+i\w+o\w+u'

# All words that only use the letters in "regular expression" (each letter can appear any number of times)
query8 = r'\b[regularexpression]+\b'

# All words that contain a double letter
query9 = r'(.)\1{1,}'

print get_matching_words(query1)
print get_matching_words(query2)
print get_matching_words(query3)
print get_matching_words(query4)
print get_matching_words(query5)
print get_matching_words(query6)
print get_matching_words(query7)
print get_matching_words(query8)
print get_matching_words(query9)

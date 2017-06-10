import re

pandp = open('/Users/evanreyes/Desktop/dojo_assignments/python/django/searching_text/pandp.txt')
text = pandp.read()

# 1. Find all the occurrences of the word wife in the document. Print the number of times that word occurs in the document.
find_wife = re.findall(r'\bwife\b', text)
print find_wife
print 'The word "wife" appears', len(find_wife), 'times. \n'

# 2. Print a new string (the entire contents of the document) where the word wife is replaced with the word unicorn.
sub_wife = re.sub(r'\bwife\b', 'unicorn', text)
print sub_wife


# 3. Print a list of all the words containing the letter 't'.
find_t = re.findall(r'\b\w*[Tt]\w*\b', text)
print find_t

# 4. Split the document into a list of words and print the list to the terminal.
split_words = re.split(" ", text)
print split_words

# 5. Find and print a list of all of the punctuation in the document.
find_punc = re.findall(r'[-,.?!\'"\']+', text)
print find_punc

# 6. Split the document into a list of sentences and print the list to the terminal.
split_sentences = re.split(".\n\n", text)
print split_sentences

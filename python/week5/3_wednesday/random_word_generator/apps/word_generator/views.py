from django.shortcuts import render, redirect
import random, string

def index(request):
    if request.method == "POST":
        gen_word = ''.join([random.choice(string.ascii_uppercase + string.digits) for i in range(14)])
        if 'attempts' in request.session:
            request.session['attempts'] += 1
        else:
            request.session['attempts'] = 1
        random_word = {
            'word': gen_word
        }
        return render(request, 'word_generator/index.html', random_word)

    else:
        return render(request, 'word_generator/index.html')

def reset(request):
    request.session['attempts'] = 0
    return redirect('/')

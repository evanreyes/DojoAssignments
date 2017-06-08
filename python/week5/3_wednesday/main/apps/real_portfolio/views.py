from django.shortcuts import render

def index(request):
    return render(request, 'real_portfolio/index.html')

def testimonials(request):
    print (request.method)
    return render(request, 'real_portfolio/testimonials.html')

def about(request):
    print (request.method)
    return render(request, 'real_portfolio/about_me.html')

def projects(request):
    print (request.method)
    return render(request, 'real_portfolio/projects.html')

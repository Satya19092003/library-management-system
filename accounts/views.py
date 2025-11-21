from django.shortcuts import render, redirect

def login_page(request):
    if request.method == 'POST':
        # handle login (later)
        pass
    return render(request, "accounts/login.html")

def signup(request):
    if request.method == 'POST':
        # handle signup form data here
        # for now, just redirect back to login or show a simple template
        return redirect('login')
    return render(request, "accounts/signup.html")  # create a template or reuse login.html

def forgot(request):
    if request.method == 'POST':
        # verify reg id / email etc.
        return redirect('login')
    return render(request, "accounts/forgot.html")

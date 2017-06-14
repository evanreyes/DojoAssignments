from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
	context = {
		"baseball_leagues": League.objects.filter(sport="Baseball"),
		"womens_leagues": League.objects.filter(name__contains="Womens'"),
		"hockey_leagues": League.objects.filter(name__contains="Hockey"),
		"not_football": League.objects.exclude(name__contains="Football"),
		"conferences": League.objects.filter(name__contains="Conference"),
		"atlantic": League.objects.filter(name__contains="Atlantic"),
		"dallas_teams": Team.objects.filter(location__contains="Dallas"),
		"raptors": Team.objects.filter(team_name__contains="Raptors"),
		"city_teams": Team.objects.filter(location__contains="City"),
		"t_teams": Team.objects.filter(team_name__startswith="T"),
		"alpha_loc_teams": Team.objects.order_by("location"),
		"reverse_alpha_name_teams": Team.objects.order_by("-team_name"),
		"cooper": Player.objects.filter(last_name__contains="Cooper"),
		"joshua": Player.objects.filter(first_name__contains="Joshua"),
		"cooper_exc_joshua": Player.objects.filter(last_name__contains="Cooper").exclude(first_name__contains="Joshua"),
		"alexander_wyatt": Player.objects.filter(first_name__contains="Alexander")|Player.objects.filter(first_name__contains="Wyatt")
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")

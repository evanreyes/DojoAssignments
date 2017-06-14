from django.shortcuts import render, redirect
from django.db.models import Count
from .models import League, Team, Player
from . import team_maker

def index(request):
	context = {
		"atlantic_teams": Team.objects.filter(league__name="Atlantic Soccer Conference"),
		"current_penguins": Player.objects.filter(curr_team__location="Boston", curr_team__team_name="Penguins"),
		"current_icbc": Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference"),
		"current_acaf_lopez": Player.objects.filter(last_name="Lopez", curr_team__league__name="American Conference of Amateur Football"),
		"football_players": Player.objects.filter(curr_team__league__sport="Football"),
		"sophia_teams": Team.objects.filter(curr_players__first_name="Sophia"),
		"sophia_leagues": League.objects.filter(teams__curr_players__first_name="Sophia"),
		"rough_exc_flores": Player.objects.filter(last_name__contains="Flores").exclude(curr_team__location="Washington", curr_team__team_name="Roughriders"),
		"samuel_evans_all": Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans"),
		"manitoba_all": Player.objects.filter(all_teams__location="Manitoba", all_teams__team_name="Tiger-Cats"),
		"vikings_former": Player.objects.filter(all_teams__location="Wichita", all_teams__team_name="Vikings").exclude(curr_team__location="Wichita", curr_team__team_name="Vikings"),
		"jacob_gray_former": Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(curr_players__first_name="Jacob", curr_players__last_name="Gray"),
		"afabp_joshua": Player.objects.filter(first_name__contains="Joshua", all_teams__league__name="Atlantic Federation of Amateur Baseball Players"),
		"12_or_more": Team.objects.annotate(num_players=Count('all_players')).filter(num_players__gte=12).order_by('-num_players'),
		"number_teams": Player.objects.annotate(num_teams=Count('all_teams')).order_by('-num_teams')
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")

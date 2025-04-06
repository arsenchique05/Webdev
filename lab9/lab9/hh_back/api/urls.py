from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.get_company, name='get-company'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'),
    path('vacancies/', views.vacancy_list, name='vacancy_list'),
    path('vacancies/<int:id>/', views.get_vacancy, name='get-vacancy'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top-ten-vacancies'),
]
from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListCreateAPIView.as_view(), name='company-list'),
    path('companies/<int:pk>/', views.CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', views.VacancyListCreateAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', views.VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
]

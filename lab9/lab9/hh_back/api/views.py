from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.forms import model_to_dict
from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    data = [{'id': company.id, 'name': company.name, 'description': company.description, 'city': company.city,
             'address': company.address} for company in companies]
    return JsonResponse(data, safe=False)

def get_company(request, id):
    company = get_object_or_404(Company, pk=id)
    data = {'id': company.id, 'name': company.name, 'description': company.description, 'city': company.city,
             'address': company.address}
    return JsonResponse(data, safe=False)

def company_vacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = Vacancy.objects.filter(company=company)
    data = {'company': model_to_dict(company),
            'vacancies': list(vacancies.values())
            }
    return JsonResponse(data, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description,
             'salary': vacancy.salary, 'company': {'id': vacancy.company.id, 'name': vacancy.company.name}} for vacancy in vacancies]
    return JsonResponse(data, safe=False)

def get_vacancy(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    data = {'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description,
             'salary': vacancy.salary, 'company': {'id': vacancy.company.id, 'name': vacancy.company.name}}
    return JsonResponse(data, safe=False)

def top_ten_vacancies(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description,
             'salary': vacancy.salary, 'company': vacancy.company.name} for vacancy in top_vacancies]
    return JsonResponse(data, safe=False)
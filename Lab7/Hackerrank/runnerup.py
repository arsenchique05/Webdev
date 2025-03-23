n = int(input())  
scores = list(map(int, input().split()))  

max_score = max(scores)

filtered_scores = [score for score in scores if score != max_score]

print(max(filtered_scores))

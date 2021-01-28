import pygame

pygame.init()

#window
winSize = [360, 540]
screen = pygame.display.set_mode(winSize)
pygame.display.set_caption('Flappy Sechi')


clock = pygame.time.Clock()


isGame = True
while isGame:
    clock.tick(60)

    #events
    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            isGame = False

    #draw
    screen.fill((255,255,255))


    pygame.display.flip()

pygame.quit()